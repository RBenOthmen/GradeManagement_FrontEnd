import { Subject } from "./Subject";

export interface Module {
    id: string;
    subjects: Subject[];
    moyenne: number;
}