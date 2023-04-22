import { Subjects } from './Subjects';

export class Student {
  private id: BigInt;
  private first_name: string;
  private last_name: string;
  private email: string;
  private phone: string;
  private image_url: string | undefined;
  private level: string;
  private cin: string;
  private subjects?: Subjects;

  constructor(
    id: BigInt,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    image_url: string,
    level: string,
    cin: string
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
    this.image_url = image_url;
    this.level = level;
    this.cin = cin;
  }

  public getId(): BigInt {
    return this.id;
  }
  public getFirstName(): string {
    return this.first_name;
  }
  public getLastName(): string {
    return this.last_name;
  }
  public getEmail(): string {
    return this.email;
  }
  public getPhone(): string {
    return this.phone;
  }
  public getImageUrl(): string | undefined {
    return this.image_url || '';
  }
  public getLevel(): string {
    return this.level;
  }
  public getCin(): string {
    return this.cin;
  }

  public setId(id: BigInt): void {
    this.id = id;
  }
  public setFirstName(first_name: string): void {
    this.first_name = first_name;
  }
  public setLastName(last_name: string): void {
    this.last_name = last_name;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
  public setPhone(phone: string): void {
    this.phone = phone;
  }
  public setImageUrl(image_url: string = ''): void {
    this.image_url = image_url;
  }
  public setLevel(level: string): void {
    this.level = level;
  }
  public setCin(cin: string): void {
    this.cin = cin;
  }
}
