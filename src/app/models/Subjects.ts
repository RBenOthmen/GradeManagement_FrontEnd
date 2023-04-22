export class Subjects {

    private id?: BigInt;
    private web?: number;
    private ai?: number;
    private data_mining?: number;
    private python?: number;
    private document_management?: number;
    private dev_ops?: number;


    constructor() {}

    public getId(): BigInt | undefined { return this.id; }
    public getWeb(): number | undefined { return this.web; }
    public getAi(): number | undefined { return this.ai; }
    public getDataMining(): number | undefined { return this.data_mining; }
    public getPhthon(): number | undefined { return this.python; }
    public getDocumentManagement(): number | undefined { return this.document_management; }
    public getDevOps(): number | undefined { return this.dev_ops; }
}