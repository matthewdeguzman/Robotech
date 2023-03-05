class PTask {
  constructor(name, duration, workTime, priority, timeLeft) {

    if (duration > timeLeft) {
      this.duration = timeLeft;
    }
    else {
      this.duration = duration;
    }
    
    this.priority = priority; // integer
    this.name = name; // string
    this.timeLeft = timeLeft; // in hours

    if (workTime > duration){
      this.workTime = duration; // the amount of time allocated to work on the task per day in hours
    }
    else {
      this.workTime = workTime;
    }
    
    if (timeLeft <= 0){
      this.priorityWeight = 0;
      timeLeft = 0;
    } else {
      this.timeLeft = timeLeft;
    }

    this.priorityWeight =  Math.ceil(priority * duration / timeLeft);
  }

  // compare two tasks
  equals(task) {
    return this.name === task.name 
    && this.duration === task.duration 
    && this.priority === task.priority 
    && this.timeLeft === task.timeLeft;
  }
  greaterThan(task){
    // if the tasks have the same priority, compare the time left
    return this.priorityWeight > task.priorityWeight;
  }
}

class Day {
  constructor(month, day, year, startTime, endTime) {
      this.day = day;
      this.month = month;
      this.year = year;
      this.startTime = startTime; // in hours
      this.endTime = endTime; // in hours
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

    // time in between in hours
    timeLeft(dueDate) {
      let timeLeft = 0;
      if (this.day.lessThan(dueDate)) {
        timeLeft = (dueDate.day - this.day) * 24;
        timeLeft += (dueDate.month - this.month) * 24 * 30;
        timeLeft += (dueDate.year - this.year) * 24 * 30 * 12;
      }
      return timeLeft;
    }
}
class Planner {
  // map of days to tasks
  constructor(currDay) {
    this.currDay = currDay;
    this.planner = new Map(); // map of days to tasks
    this.tasks = new Array();
    this.workWeek = new Set();
  }

  planTasks() {
    this.sortTasks();
    for (let task of this.tasks) {
      let duration = task.duration;
      let days = -1;
      for (let dayWeek of this.workWeek) {
        let timeslot = dayWeek.endTime - dayWeek.startTime;
        let timeRemaining = task.timeLeft - (24 * days);
        if (duration > 0 && timeslot > 0 && timeRemaining > 0) {
          if (task.workTime <= timeslot) {
            let newTask = new PTask(task.name, duration, task.workTime, task.priority, timeRemaining);
            this.pushTaskToDay(newTask, dayWeek);
            duration -= task.workTime;
            dayWeek.startTime += task.workTime;

          }
          else {
            let newTask = new PTask(task.name, duration, task.workTime, task.priority, timeRemaining);
            this.pushTaskToDay(newTask, dayWeek);
            duration -= timeslot;
            dayWeek.startTime = dayWeek.endTime;
          }
        }
        if (duration <= 0){
          task.duration = 0;
          break;
        }
        days++;
      }
    }
  }

  addDay(day) {
    this.workWeek.add(day);
  }

  // add task to day
  addTask(task) {
    // add task to task set
    this.tasks.push(task);
  }

  pushTaskToDay(task, day) {
    if (this.planner.has(day)) {
      this.planner.get(day).push(task);
    } else {
      this.planner.set(day, [task]);
    }
  }

  // sort tasks list by priority 
  sortTasks() {
    this.tasks.sort((a, b) => {
      return b.priorityWeight - a.priorityWeight;
    });
  }

  // print planner
  printPlanner() {
    for (let [day, tasks] of this.planner) {
      console.log("List of tasks for " + day.toString() + ": ");
      for (let task of tasks) {
        console.log(task.name + " " + task.duration + " " + task.priority + " " + task.workTime + " " + task.timeLeft);
      }
    }
  }
}

export {Planner, Day, PTask};