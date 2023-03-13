import {ORDER_TYPE} from "../enums/ORDER_TYPE";
import {ActionQueueLine} from "./ActionQueueLine";
import {AttemptTask} from "./AttemptTask";
import {ScoutRank} from "./ScoutRank";
import {ScoutInstructorRank} from "./ScoutInstructorRank";
import {MeritBadge} from "./MeritBadge";

export class Attempt{


  constructor(

    public name?:string,
    public attemptTasks?:AttemptTask[],
    public scoutRankId?: ScoutRank,
    public scoutInstructorRankId?:ScoutInstructorRank,
    public meritBadgeId?:MeritBadge

  ) {}




}
