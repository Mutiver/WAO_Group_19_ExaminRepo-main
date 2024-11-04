using Analytics.Dal;
using Analytics.Model;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Analytics.Repositories;

public class StatsRepository
{
    private readonly IMongoCollection<Stats> _collection;

    public StatsRepository(MongoDbContext database)
    {
        _collection = database.GetCollection<Stats>("Stats");
    }


    public async Task<Stat> PutAsync(Stat stats)
    {
        try
        {
            var filter = Builders<Stats>.Filter.Eq(s => s.UserId, stats.UserId);
            var update = Builders<Stats>.Update
                .Inc(s => s.NumberOfTodos, calc(stats.NumberOfTodos))
                .Inc(s => s.NumberOfTransactions, calc(stats.NumberOfTransactions));

            var options = new FindOneAndUpdateOptions<Stats>
            {
                IsUpsert = true,
                ReturnDocument = ReturnDocument.After
            };

            var doc = await _collection.FindOneAndUpdateAsync(filter, update, options);

            return new Stat
            {
                UserId = doc.UserId,
                NumberOfTodos = doc.NumberOfTodos,
                NumberOfTransactions = doc.NumberOfTransactions
            };
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
            throw;
        }
    }

    private double calc(double ind)
    {
        if (ind == 0) return 0;
        if (ind > 0) return 1;
        return -1;
    }


    public async Task<Stats> GetAsync(string userId)
    {
        var stats = await _collection.Find(s => s.UserId == userId).FirstOrDefaultAsync();

        if (stats != null) return stats;

        stats = new Stats { UserId = userId, NumberOfTransactions = 0, NumberOfTodos = 0 };

        await _collection.InsertOneAsync(stats);

        return stats;
    }
}