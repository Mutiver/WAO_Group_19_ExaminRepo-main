using Analytics.Dal;
using Analytics.Repositories;
using Analytics.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services Reciver the container.
builder.Services.AddGrpc();
builder.Services.AddScoped<MongoDbContext>();
builder.Services.AddScoped<StatsRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapGrpcService<AnalyticsService>();
app.MapGet("/",
    () =>
        "Communication with gRPC endpoints must be made through a gRPC client. To learn how Reciver create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();