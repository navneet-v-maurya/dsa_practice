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
}

const g = new Graph();

g.add_vertex("a");
g.add_vertex("a");
g.add_vertex("b");
g.add_vertex("c");
g.add_edge("a", "c");
g.add_edge("a", "c");
g.add_edge("a", "b");
g.add_edge("a", "d");
g.remove_edge("a", "c");
g.remove_vertex("d");
console.log(g.get_neighbours("d"));
g.display();

console.log(g.graph);
