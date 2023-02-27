import {Component, OnInit} from '@angular/core';
import {OrderService} from "../services/order.service";
import {ActionQueueLine} from "../models/ActionQueueLine";
import {CustomResponse} from "../models/CustomResponse";
import {ACTION_TYPE} from "../enums/ACTION_TYPE";
import {Organization} from "../models/Organization";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  public actionQueueLines : ActionQueueLine[] = [];
  public actionQueueLinesGRANTING_MERITBADGE_AND_RANKS :ActionQueueLine[] = [];
  public actionQueueLinesCREATE_ORGANIZATION :ActionQueueLine[] = [];
  public actionQueueLinesGRANTING_FUNCTION :ActionQueueLine[] = [];
  public actionQueueLinesREVOKING_FUNCTION :ActionQueueLine[] = [];
  public orderOrganization : Organization = new Organization();


  constructor(public  orderService:OrderService) {



    //Get Action Queue Line information

    orderService.getAllActiveLines(2).subscribe( (customResponse : CustomResponse) =>{
      this.actionQueueLines=customResponse.data.getActiveTask;
      this.actionQueueLines.forEach(
        actionQueue=>{
         if(actionQueue.action_type===ACTION_TYPE.GRANTING_MERITBADGE_AND_RANKS){
           this.actionQueueLinesGRANTING_MERITBADGE_AND_RANKS.push(actionQueue);
         }
         else if(actionQueue.action_type===ACTION_TYPE.CREATE_ORGANIZATION){
           this.actionQueueLinesCREATE_ORGANIZATION.push(actionQueue);
         }
         else if(actionQueue.action_type===ACTION_TYPE.GRANTING_FUNCTION){
           this.actionQueueLinesGRANTING_FUNCTION.push(actionQueue);
         }
         else if(actionQueue.action_type===ACTION_TYPE.REVOKING_FUNCTION){
           this.actionQueueLinesREVOKING_FUNCTION.push(actionQueue);
         }})
      console.log(this.actionQueueLines)
      console.log("merit")
      console.log(this.actionQueueLinesGRANTING_MERITBADGE_AND_RANKS)
      console.log("org")
      console.log(this.actionQueueLinesCREATE_ORGANIZATION)
      console.log("gfun")
      console.log(this.actionQueueLinesGRANTING_FUNCTION)
      console.log("rfunc")
      console.log(this.actionQueueLinesREVOKING_FUNCTION)






    });




    //Get Organization information

    orderService.getOrganization(2).subscribe((customResponse : CustomResponse) =>{
      this.orderOrganization=customResponse.data.organization;
      console.log(this.orderOrganization)
    })



  }

  public getActionQueueLineGRANTING_MERITBADGE_AND_RANKS() : ActionQueueLine[]{
    return this.actionQueueLinesGRANTING_MERITBADGE_AND_RANKS;
  }

  ngOnInit(): void {
  }

}
