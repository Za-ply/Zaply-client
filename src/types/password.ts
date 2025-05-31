export interface PasswordValidation {
  isValid: boolean;
  errors: {
    length: boolean;
    english: boolean;
    number: boolean;
  };
  messages: {
    length: string | null;
    english: string | null;
    number: string | null;
  };
}
