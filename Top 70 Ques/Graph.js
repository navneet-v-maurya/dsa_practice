const Queue = require("../Dsa/Queue");

//find if path exists
const path_exist = (edges, source, destination) => {
  if (edges.length === 0) return true;
  const graph = {};

  for (let i = 0; i < edges.length; i++) {
    const first_vertex = edges[i][0];
    const second_vertex = edges[i][1];
    if (graph[first_vertex]) {
      graph[first_vertex].push(second_vertex);
    } else {
      graph[first_vertex] = [second_vertex];
    }
    if (graph[second_vertex]) {
      graph[second_vertex].push(first_vertex);
    } else {
      graph[second_vertex] = [first_vertex];
    }
  }

  bfs_traversal = (start_node) => {
    const visited = {};
    const result = [];
    const queue = new Queue();
    queue.push(start_node);

    while (queue.get_length() > 0) {
      const item = queue.pop();
      if (!visited[item]) {
        result.push(item);
        visited[item] = true;
      }
      const neighbours = graph[item];
      if (!neighbours) continue;
      for (let i = 0; i < neighbours.length; i++) {
        if (!visited[neighbours[i]]) {
          queue.push(neighbours[i]);
        }
      }
    }

    if (visited[source] && visited[destination]) return true;
    return false;
  };

  return bfs_traversal(source);
};

console.log(
  path_exist(
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);
