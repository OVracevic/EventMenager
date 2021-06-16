import { CurrencyPipe, WeekDay } from '@angular/common';
import { Component, OnInit, ɵsetCurrentInjector } from '@angular/core';



@Component({
  selector: 'app-kalendar',
  templateUrl: './kalendar.component.html',
  styleUrls: ['./kalendar.component.css']
})
export class KalendarComponent implements OnInit {
  months = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "jun",
    "Jul",
    "Avgust",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar"];

  constructor() {
    
    
   }
   today = new Date();
   
   //prvi i poslednji dan
    lastDay = new Date(this.today.getFullYear(), this.today.getMonth() + 1,0).getDate();
    firstDayOfMonth = new Date(this.today.getFullYear(), this.today.getMonth(), 1).getDate();

    prevLasDay = new Date(this.today.getFullYear(), this.today.getMonth(),0).getDate();

    //prvi ponedeljak u 
    LastMonday = new Date(this.today.getFullYear(), this.today.getMonth(),0);
    monday = this.LastMonday.getDate() - this.LastMonday.getDay();
    
    

    
    

    firstDayIndex = this.today.getDay();
    

    daysOfPrevMonth:any[] = []

    daysOfThisMonth:any[] = []

    daysOfNextMonth:any[] = []
    
    currentMonthName = this.months[this.today.getMonth()];
    currentDate = new Date().toDateString();

   nextMonth(){
     this.today.setMonth(this.today.getMonth()+1);
     this.updateCalendar();
   }
   prevMonth(){
    this.today.setMonth(this.today.getMonth()-1);
    this.updateCalendar();
    }

    updateCalendar(){
      this.daysOfPrevMonth = []
      this.daysOfThisMonth = []
      this.daysOfNextMonth = []
    
      this.lastDay = new Date(this.today.getFullYear(), this.today.getMonth() + 1,0).getDate();
      this.firstDayOfMonth = new Date(this.today.getFullYear(), this.today.getMonth(), 1).getDate();  

      this.currentMonthName = this.months[this.today.getMonth()];
      this.currentDate = new Date().toDateString();

      this.prevLasDay = new Date(this.today.getFullYear(), this.today.getMonth(),0).getDate();

      this.LastMonday = new Date(this.today.getFullYear(), this.today.getMonth(),0);
      this.monday = this.LastMonday.getDate() - this.LastMonday.getDay();

      

      //for za dodavanje dana proslog meseca
      for(let i = this.monday;i<this.prevLasDay;i++)
      {
        this.daysOfPrevMonth.push(i+1);
      }

      //for za dodavanje dana ovog meseca
      for(let i = this.firstDayOfMonth; i <= this.lastDay; i++)
      {
        this.daysOfThisMonth.push(i);
      }

      
      //for za dodavanje dana sledeceg meseca
      let j = 1
      
     let temp = new Date(this.today.getFullYear(), this.today.getMonth() + 1,0).getDay();
      for(let i = temp; i<7; i++)
      {
        this.daysOfNextMonth.push(j);
        j++;
      }
    }

  ngOnInit(): void {
  this.updateCalendar();
    
    }
    
  }



