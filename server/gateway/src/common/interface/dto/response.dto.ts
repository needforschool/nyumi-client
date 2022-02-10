export interface ResponseDto {
  message: string;
  errors: { [key: string]: unknown } | null;
}
