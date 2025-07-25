const Queue = require("./Queue");
class Graph {
  constructor() {
    this.graph = {};
  }

  add_vertex(vertex) {
    if (!this.graph[vertex]) {
      this.graph[vertex] = [];
    }
  }

  add_edge(vertex1, vertex2) {
    if (!this.graph[vertex1]) {
      this.graph[vertex1] = [];
    }

    if (!this.graph[vertex2]) {
      this.graph[vertex2] = [];
    }

    if (!this.graph[vertex1].includes(vertex2)) {
      this.graph[vertex1].push(vertex2);
    }

    if (!this.graph[vertex2].includes(vertex1)) {
      this.graph[vertex2].push(vertex1);
    }
  }

  remove_vertex(vertex) {
    if (this.graph[vertex]) {
      delete this.graph[vertex];

      for (const key in this.graph) {
        const current = this.graph[key];
        for (let j = 0; j < current.length; j++) {
          if (current[j] === vertex) {
            current.splice(j, 1);
          }
        }
      }
    }
  }

  remove_edge(vertex1, vertex2) {
    if (this.graph[vertex1]) {
      for (let i = 0; i < this.graph[vertex1].length; i++) {
        if (this.graph[vertex1][i] === vertex2) {
          this.graph[vertex1].splice(i, 1);
        }
      }
    }
    if (this.graph[vertex2]) {
      for (let i = 0; i < this.graph[vertex2].length; i++) {
        if (this.graph[vertex2][i] === vertex1) {
          this.graph[vertex2].splice(i, 1);
        }
      }
    }
  }

  get_neighbours(vertex) {
    if (this.graph[vertex]) {
      return this.graph[vertex];
    }
    return null;
  }

  display() {
    for (const key in this.graph) {
      console.log(`${key} => ${this.graph[key]}`);
    }
    console.log("\n");
  }

  has_vertex(vertex) {
    return !!this.graph[vertex];
  }

  has_edge(vertex1, vertex2) {
    if (this.has_vertex(vertex1) && this.has_vertex(vertex2)) {
      const temp1 = this.graph[vertex1];
      const temp2 = this.graph[vertex2];
      let found1 = false;
      let found2 = false;

      for (let i = 0; i < temp1.length; i++) {
        if (temp1[i] === vertex2) {
          found1 = true;
          break;
        }
      }

      for (let i = 0; i < temp2.length; i++) {
        if (temp2[i] === vertex1) {
          found2 = true;
          break;
        }
      }

      return found1 && found2;
    }
    return false;
  }

  bfs_traversal(start_node, return_type = "result") {
    if (!this.has_vertex(start_node)) return [];

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
      const neighbours = this.get_neighbours(item);
      for (let i = 0; i < neighbours.length; i++) {
        if (!visited[neighbours[i]]) {
          queue.push(neighbours[i]);
        }
      }
    }

    return return_type === "result" ? result : visited;
  }

  dfs_traversal(start_node, return_type = "result") {
    if (!this.has_vertex(start_node)) return [];
    const visited = {};
    const result = [];

    const traversal = (node, result, visited) => {
      if (!visited[node]) {
        result.push(node);
        visited[node] = true;
        const neighbours = this.get_neighbours(node);
        for (let i = 0; i < neighbours.length; i++) {
          if (!visited[neighbours[i]]) {
            traversal(neighbours[i], result, visited);
          }
        }
      }
    };

    traversal(start_node, result, visited);

    return return_type === "result" ? result : visited;
  }
}

const g = new Graph();

g.add_vertex("a");
g.add_vertex("a");
g.add_vertex("b");
g.add_vertex("c");
g.add_edge("a", "c");
g.add_edge("v", "x");
g.add_edge("a", "b");
g.add_edge("a", "d");
g.add_edge("d", "c");
g.add_edge("c", "g");
g.add_edge("b", "d");
g.add_edge("b", "v");
g.add_edge("g", "h");

console.log(g.get_neighbours("d"));
console.log(g.has_vertex("a"));
console.log(g.has_edge("b", "a"));
//g.display();
console.log("dfs_traversal => ", g.dfs_traversal("a"));

console.log(g.graph);

module.exports = {
  Graph,
};
