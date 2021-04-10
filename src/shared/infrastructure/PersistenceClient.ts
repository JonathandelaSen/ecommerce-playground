
interface PersistenceClient {
    connect(): Promise<void>;
    close(): Promise<void>;
}