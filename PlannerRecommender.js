class Task {
  constructor(name, duration, priority) {
    this.name = name; // string

    if (duration > 24) {
      this.duration = 24;
    } else if (duration < 1) {
      this.duration = 1;
    } else {
      this.duration = duration; // in hours
    }

    if (priority > 10) {
      this.priority = 10;
    } else if (priority < 1) { 
      this.priority = 1;
    } else {
      this.priority = priority; // 1-10
    }
  }
}

class Day {
  constructor(month, day, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    }

    // compare two days
    equals(day) {
      return this.day === day.day && this.month === day.month && this.year === day.year;
    }
    
    // return the day after the current day
    lessThan(day) {
      if (this.year < day.year) {
        return true;
      } 
      else if (this.year === day.year) {
        if (this.month < day.month) {
          return true;
        } 
        else if (this.month === day.month) {
          return this.day < day.day;
        }
      }
      return false;
    }

    // return date in the format "month/day/year"
    toString() {
      return this.month + "/" + this.day + "/" + this.year;
    }
}

class Planner {
  // map of days to tasks
  constructor() {
    this.planner = new Map();
  }

  // add a task to the planner
  addTask(task, day) {
    if (this.planner.has(day) && !this.checkOverbooked(day) && task.duration + this.getDuration(day) <= 24) {
      this.planner.get(day).push(task);
      this.sortTasks(this.planner.get(day));
    } else if (!this.planner.has(day)) {
      this.planner.set(day, [task]);
    } else {
      console.log("Sorry, " + task.name + " cannot be added");
    }
  }

  // return the tasks for a given day
  getTasks(day) {
    return this.planner.get(day);
  }

  // sort tasks of the day by priority 10 being the highest priority
  sortTasks(tasks) {
    tasks.sort((a, b) => b.priority - a.priority);
  }

  // once a task has been completed
  completeTask(task, day) {
    task.priority = 0;
    this.sortTasks(this.planner.get(day), day);
  }

  // get total duration of tasks for a day
  getDuration(day) {
    let duration = 0;
    for (let tasks of this.planner.get(day)) {
      duration += tasks.duration;
    }
    return duration;
  }

  // if duration of tasks for a day is greater than 24 hours
  checkOverbooked(day) {
    let duration = 0;
    for (let tasks of this.planner.get(day)) {
      duration += tasks.duration;
    }
    return duration > 24;
  }

  // check if a task has been completed
  isCompleted(task) {
    return task.priority === 0;
  }

  // change priority of a task
  changePriority(task, priority) {
    if (priority > 10) {
      task.priority = 10;
    } else if (priority < 1) {
      task.priority = 1;
    } else {
      task.priority = priority;
    }
  }

  // print planner
  printPlanner() {
    for (let [key, value] of this.planner) {
      console.log("List of tasks for " + key.toString() + ": ");
      for (let task of value) {
        console.log(task.name + " " + task.duration + " " + task.priority);
      }
    }
  }
}

let planner = new Planner();

planner.addTask(new Task("task1", 2, 5), new Day(1, 1, 2020));
planner.addTask(new Task("task2", 2, 5), new Day(1, 1, 2020));
planner.addTask(new Task("task3", 2, 5), new Day(1, 1, 2020));


planner.printPlanner();
