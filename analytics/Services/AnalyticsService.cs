using Analytics.Repositories;
using Grpc.Core;

namespace Analytics.Services
{
    public class AnalyticsService : Analytics.AnalyticsBase
    {
        private readonly ILogger<AnalyticsService> _logger;
        private readonly StatsRepository _statsRepository;

        public AnalyticsService(ILogger<AnalyticsService> logger, StatsRepository statsRepository)
        {
            _logger = logger;
            _statsRepository = statsRepository;
        }

        public override async Task<ReplyStat> GetAnalytics(AnalyticsRequest request, ServerCallContext context)
        {
            var userId = request.UserId;
            var stats = await _statsRepository.GetAsync(userId);
            _logger.LogInformation($"Retrieved stats for user {stats}");

            if (stats == null)
            {
                throw new RpcException(new Status(StatusCode.Unknown, "User not found"));
            }

            _logger.LogInformation($"Retrieved stats for user {userId}");

            return new ReplyStat
            {
                NumberOfTodos = stats.NumberOfTodos,
                NumberOfTransactions = stats.NumberOfTransactions
            };
        }

        public override async Task<Stat> UpdateAnalytics(Stat request, ServerCallContext context)
        {
            try
            {
                // Update the stats using the repository
                var updatedStats = await _statsRepository.PutAsync(request);

                // Return the updated stats
                return updatedStats;
            }
            catch (Exception ex)
            {
                // Log the exception details
                Console.WriteLine($"An error occurred while updating analytics: {ex.Message}");

                // Throw a gRPC exception to notify the client about the error
                throw new RpcException(new Status(StatusCode.Internal, "Internal server error"));
            }
        }
    }
}