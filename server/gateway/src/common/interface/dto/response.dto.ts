export interface ResponseDto {
  message: string;
  errors: { [key: string]: any } | null;
}
