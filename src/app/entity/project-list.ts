export class ProjectList {
    id_project:number = null;
    ticket:string = "";
    project_name:string = "";
    tipe_project:string = "";
    status:string = "";
    descriptions:string = "";
    deadline:string = "";
    pic_dev:string = "";
    pic_ba:string = "";
    pic_pmo:string = "";
    created_date:string = "";
    updated_date:string = "";
    created_by:string = "";
    updated_by:string = "";
    priority:string = "";
    start_dev:string = "";
    end_dev:string = "";
}

export class PIC {
    name:string = "";
    checked:boolean = false;
}

export class Login {
    username:string = "";
    password:string = "";
}