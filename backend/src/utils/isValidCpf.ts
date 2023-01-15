import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsCPFConstraint implements ValidatorConstraintInterface {
  validate(cpf: string) {
    if (!cpf) return false;

    const strippedCpf = cpf.replace(/[^\d]/g, '');
    cpf = cpf.replace(/[\s.-]*/gim, '');
    if (cpf.length !== 11) return false;

    for (let i = 0; i <= 9; i += 1) {
      const invalidCpf = `${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}`;
      if (cpf === invalidCpf) return false;
    }

    let sum = 0;
    let rest: number;

    for (let i = 1; i <= 9; i += 1) {
      sum += Number(cpf.substring(i - 1, i)) * (11 - i);
    }
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== Number(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i += 1) {
      sum += Number(cpf.substring(i - 1, i)) * (12 - i);
    }
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== Number(cpf.substring(10, 11))) return false;

    let add = 0;
    for (let i = 0; i < 9; i++) {
      add += parseInt(strippedCpf.charAt(i), 10) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(strippedCpf.charAt(9), 10)) {
      return false;
    }
    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(strippedCpf.charAt(i), 10) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(strippedCpf.charAt(10), 10)) {
      return false;
    }
    return true;
  }
}

export function IsCPF(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      name: 'CPF Validation',
      validator: IsCPFConstraint,
    });
  };
}
