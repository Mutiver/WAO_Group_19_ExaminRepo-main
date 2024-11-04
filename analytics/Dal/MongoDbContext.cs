using MongoDB.Driver;

namespace Analytics.Dal;

public class MongoDbContext
{
    private readonly IMongoDatabase _database;
    private readonly string _connectionString = "mongodb://root:example@mongo:27017/";
    private readonly string _name = "waoGroup19";

    public MongoDbContext()
    {
        var client = new MongoClient(_connectionString);
        _database = client.GetDatabase(_name);
    }

    public IMongoCollection<T> GetCollection<T>(string collectionName)
    {
        return _database.GetCollection<T>(collectionName);
    }
}