namespace L04 {export interface Task {
    taskname: string;
    comment: string;
    responsible: string;
    deadline: string;
    status: boolean;
}

export interface Entries {
    [name: string]: Task[];
}

export let data: Entries = {
    Input: [
        { taskname: "Putzen", comment: "Jetzt aber flott", responsible: "Max", deadline: "2023-04-23", status: true },
        { taskname: "Wocheneinkauf erledigen", comment: "Einkaufliste bis Dienstag ausfüllen", responsible: "Max", deadline: "2023-04-23", status: false },
    ] 
} 
}
  