import { CreditCard } from './../models/credit-card';
import { Component, ViewChild  } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CreditCardService } from '../services/credit-card.service';
import { ServerResponse } from '../models/ServerResponse';
/*
const TABLE_DATA: CreditCard[] = [
  {
    id: 1,
    name: 'Bank of America',
    maxCredit:2000,
    interestRate:'5%',
    active:true,
    recommendedScore:'700-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  },
  {
    id: 2,
    name: 'Chase',
    maxCredit:4000,
    interestRate:'4%',
    active:true,
    recommendedScore:'600-900',
  }
  
]*/

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrl: './creditcards.component.scss'
})

export class CreditcardsComponent {

  creditcards: CreditCard[] = []; 
  
  dataSource = new MatTableDataSource(this.creditcards);

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private creditCardsService: CreditCardService){
    this.creditCardsService.getCreditCards().subscribe((data: ServerResponse) => {
        this.creditcards = data.response;
        this.dataSource = new MatTableDataSource(this.creditcards);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    })
  }


  displayColumns = ["select","id","name","maxCredit","interestRate","active","recommendedScore"];

  selection = new SelectionModel(true,[]);

  selectHandler(row: CreditCard){
    this.selection.toggle(row as never);
  }
}
