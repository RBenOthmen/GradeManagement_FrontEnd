import { Module } from './Module';

export interface Student {
  id?: BigInt;
  first_name?: string;
  last_name?: string;
  modules?: Module[];
}
