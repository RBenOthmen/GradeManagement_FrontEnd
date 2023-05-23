import { Subject } from "./Subject";

export interface Module {
    id: string;
    name: string;
    subjects: Subject[];
    moyenne: number;
}