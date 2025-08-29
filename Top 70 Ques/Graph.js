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
  "path_exist => ",
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

//steps by knight problem

const knights_problem = (n, start, destination) => {
  const visited = {};
  const queue = [];
  let moves = 0;

  const total_moves = [
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
  ];

  queue.push(start);
  visited[`${start[0]},${start[1]}`] = true;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const temp = queue.shift();

      if (temp[0] === destination[0] && temp[1] === destination[1]) {
        return moves;
      }

      for (let j = 0; j < total_moves.length; j++) {
        const new_x = temp[0] + total_moves[j][0];
        const new_y = temp[1] + total_moves[j][1];

        if (new_x >= 0 && new_x < n && new_y >= 0 && new_y < n) {
          const key = `${new_x},${new_y}`;
          if (!visited[key]) {
            queue.push([new_x, new_y]);
            visited[key] = true;
          }
        }
      }
    }

    moves++;
  }

  return -1;
};

console.log("knights_problem => ", knights_problem(8, [0, 0], [7, 7]));

//reorder routes

const reorder_routes = (n, connections) => {
  const forward = {};
  const reverse = {};
  const visited = {};
  let count = 0;

  for (let i = 0; i < connections.length; i++) {
    const start = connections[i][0];
    const end = connections[i][1];
    if (forward[start]) {
      forward[start].push(end);
    } else {
      forward[start] = [end];
    }

    if (reverse[end]) {
      reverse[end].push(start);
    } else {
      reverse[end] = [start];
    }
  }

  const dfs = (key) => {
    visited[key] = true;

    const forward_neighbours = forward[key] || [];
    const reversed_neighbors = reverse[key] || [];

    for (let i = 0; i < forward_neighbours.length; i++) {
      if (!visited[forward_neighbours[i]]) {
        count += 1;
        dfs(forward_neighbours[i]);
      }
    }

    for (let i = 0; i < reversed_neighbors.length; i++) {
      if (!visited[reversed_neighbors[i]]) {
        dfs(reversed_neighbors[i]);
      }
    }
  };

  dfs(0);

  return count;
};

console.log(
  "reorder_routes => ",
  reorder_routes(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ])
);

//cycle detection using dfs in undirected graph
const has_cycle_using_dfs_undirected = (edges) => {
  const graph = [];

  for (let [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = {};

  const dfs = (node, parent) => {
    visited[node] = true;

    for (let nei of graph[node]) {
      if (!visited[nei]) {
        if (dfs(nei, node)) return true;
      } else if (nei !== parent) {
        return true;
      }
    }

    return false;
  };

  for (let i = 0; i < graph.length; i++) {
    if (graph[i] && !visited[i]) {
      if (dfs(i, -1)) return true;
    }
  }

  return false;
};

console.log(
  "has_cycle_using_dfs_undirected => ",
  has_cycle_using_dfs_undirected([
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 3],
  ])
);

//cycle detection using bfs in undirected graph
const has_cycle_using_bfs_undirected = (edges) => {
  const graph = new Array(edges.length);

  for (let i = 0; i < edges.length; i++) {
    const first = edges[i][0];
    const second = edges[i][1];

    if (!graph[first]) graph[first] = [];
    if (!graph[second]) graph[second] = [];
    graph[first].push(second);
    graph[second].push(first);
  }

  const queue = [];
  const visited = {};

  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      queue.push([i, -1]);
      visited[i] = true;
      while (queue.length > 0) {
        const [current, parent] = queue.shift();
        const neighbours = graph[current] || [];
        for (let j = 0; j < neighbours.length; j++) {
          if (!visited[neighbours[j]]) {
            visited[neighbours[j]] = true;
            queue.push([neighbours[j], current]);
          } else if (parent !== neighbours[j]) {
            return true;
          }
        }
      }
    }
  }

  return false;
};

console.log(
  "has_cycle_using_bfs_undirected => ",
  has_cycle_using_bfs_undirected([
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 3],
  ])
);

//cycle detection using dfs in directed graph
