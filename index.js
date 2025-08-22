const API_URL = "http://localhost:3000";

const todosElement = document.querySelector("#todos");

const loadTodos = async () => {
    // On utilise fetch pour récupérer les données
    const response = await fetch(`${API_URL}/todos`);
    const todos = await response.json();

    // On les affiche dans la console
    console.log(todos);

    // On les transforme en json pour les afficher dans la page
    todosElement.innerHTML = JSON.stringify(todos, null, 2);
};

loadTodos();
