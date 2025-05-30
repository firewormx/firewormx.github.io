interface Todo {
    title: string;
    category: "work" | "personal";
}

export default class Todos {
    private todos: Todo[];
    constructor() {
        this.todos = [
            { title: "Learn JavaScript", category: "work" },
            { title: "Meditate", category: "personal" }
        ];
    }

    getAll(): Todo[] {
        return this.todos;
    }

    getCount(): number {
        return this.todos.length;
    }

    add(title: string, category: "work" | "personal"): void {
        this.todos.push({ title, category });
    }

    getWork(): Todo[] {
        return this.todos.filter(todo => todo.category === "work");
    }

    getWorkCount(): number {
        return this.getWork().length;
    }

    getPersonal(): Todo[] {
        return this.todos.filter(todo => todo.category === "personal");
    }

    getPersonalCount(): number {
        return this.getPersonal().length;
    }
}