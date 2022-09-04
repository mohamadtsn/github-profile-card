declare type ErrorType = string | 'success' | 'error' | 'warning' | 'info';

declare type RequestError = {
    title: string,
    message: string,
    type: ErrorType
}

declare type RequestErrors = {
    hasError: boolean;
    errors: Array<RequestError>;
}
