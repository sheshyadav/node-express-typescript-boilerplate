class ApiResponse<T> {
  public success: boolean;

  constructor(
    public statusCode: number,
    public data: T,
    public message: string = 'Success',
  ) {
    this.success = statusCode < 400;
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }
}

export { ApiResponse };
