abstract class BaseError extends Error {
    abstract TYPE: number;
    
    code: number;
}