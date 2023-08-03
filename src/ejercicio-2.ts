class Individual {
    name;
    lastname;

    constructor(name: string, lastname: string) {
        this.name = name;
        this.lastname = lastname;
    }
}

class Family {
    members;
    name;

    constructor(members: Individual[], name: string) {
        this.members = members;
        this.name = name;
    }
}

class Society {
    members;

    constructor(members: Family[]) {
        this.members = members;
    }
}

