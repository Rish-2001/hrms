import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { ConfigurationService } from 'src/app/shared/service/http/configuration.service';
import { HttpService } from 'src/app/shared/service/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private httpService: HttpService, private configuration: ConfigurationService) { }

  getDeptWithId(): Observable<any> {
    return this.httpService
      // .makeGetReq(this.configuration.getEmp, payLoad )
      //.makeGetReq(payLoad, this.configuration.getEmp)
      .makeGetReq(this.configuration.dept)
      .pipe(
        map((res: any) => {
          //const responseBody = res.body;
          // if (res.status == "SUCCESS") {
          //   return res;
          // } else {
          //   return res.errorCode;
          // }
          return res;
        })
      );
  }
  getListEmployee(): Observable<any> {
    return this.httpService
      // .makeGetReq(this.configuration.getEmp, payLoad )
      .makeGetReq(this.configuration.dept)
      .pipe(
        map((res: any) => {
          //const responseBody = res.body;
          // if (res.status == "SUCCESS") {
          //   return res;
          // } else {
          //   return res.errorCode;
          // }
          return res;
        })
      );
  }
  saveDepartmentDetail(deptDetails: any): Observable<any> {
    debugger
    return this.httpService
      // .makeGetReq(this.configuration.getEmp, payLoad )

      .makePostReq(deptDetails, this.configuration.dept)
      .pipe(
        map((res: any) => {
          //const responseBody = res.body;
          // if (res.status == "SUCCESS") {
          //   return res;
          // } else {
          //   return res.errorCode;
          // }
          return res;
        })
      );
  }
  editDepartmentDetail(deptDetails: any, id:string): Observable<any> {
    const x = this.configuration.dept + "/"+id; 
    return this.httpService.makePutReq(deptDetails,x);
 } 
 deleteDepartment(departmentId: string): Observable<any> {
  const url = `${this.configuration.getDepartmentDeleteMultiple}/${departmentId}`;
  return this.httpService
    .makeDeleteReq(url)
    .pipe(
      catchError((error: any) => {
        throw error; // Handle errors if necessary
      })
);
 }

// #region Country***By Ganesh 16 April 2024

getCountryWithId(): Observable<any> {
  return this.httpService
    .makeGetReq(this.configuration.getCountry)
    .pipe(
      map((res: any) => {
        return res;
      })
    );
}
getListCountry(): Observable<any> {
  return this.httpService
    .makeGetReq(this.configuration.getCountry)
    .pipe(
      map((res: any) => {
        return res;
      })
    );
}
saveCountryDetail(countryDetails: any): Observable<any> {
  debugger
  return this.httpService
    .makePostReq(countryDetails, this.configuration.getCountry)
    .pipe(
      map((res: any) => {
        return res;
      })
    );
}
editCountrytDetail(countryDetails: any, id: string): Observable<any> {
  const x = this.configuration.getCountry + "/" + id;
  return this.httpService.makePutReq(countryDetails, x);
}

 //#endregion

 //#region State**By Ganesh 16 April 2024********************* */
 getStateWithId(): Observable<any> {
  return this.httpService
    .makeGetReq(this.configuration.getState)
    .pipe(
      map((res: any) => {
        return res;
      })
    );
}
getListState(): Observable<any> {
  return this.httpService
    .makeGetReq(this.configuration.getState)
    .pipe(
      map((res: any) => {
        return res;
      })
    );
}
saveStateDetail(stateDetails: any): Observable<any> {
  debugger
  return this.httpService
    .makePostReq(stateDetails, this.configuration.getState)
    .pipe(
      map((res: any) => {
        return res;
      })
    );
}
getAllCountry(): Observable<any> {
  return this.httpService
    .makeGetReq(this.configuration.getCountry)
    .pipe(
      map((res: any) => {
        return res;
      })
    )
}
editStateDetail(stateDetails: any, id: string): Observable<any> {
  const x = this.configuration.getState + "/" + id;
  return this.httpService.makePutReq(stateDetails, x);
}

 //#endregion

 //****************Designations***By Ganesh 14 Mar 2024********************** */
 getDesigWithId(): Observable<any> {
  return this.httpService
    // .makeGetReq(this.configuration.getEmp, payLoad )
    //.makeGetReq(payLoad, this.configuration.getEmp)
    .makeGetReq(this.configuration.getDesig)
    .pipe(
      map((res: any) => {
        //const responseBody = res.body;
        // if (res.status == "SUCCESS") {
        //   return res;
        // } else {
        //   return res.errorCode;
        // }
        return res;
      })

    );
}
getListDesignation(): Observable<any> {
  return this.httpService
    // .makeGetReq(this.configuration.getEmp, payLoad )
    .makeGetReq(this.configuration.getDesig)
    .pipe(
      map((res: any) => {
        //const responseBody = res.body;
        // if (res.status == "SUCCESS") {
        //   return res;
        // } else {
        //   return res.errorCode;
        // }
        return res;
      })
    );
}
saveDesignationDetail(desigDetails: any): Observable<any> {
  debugger
  return this.httpService
    // .makeGetReq(this.configuration.getEmp, payLoad )
    .makePostReq(desigDetails, this.configuration.getDesig)
    .pipe(
      map((res: any) => {
        //const responseBody = res.body;
        // if (res.status == "SUCCESS") {
        //   return res;
        // } else {
        //   return res.errorCode;
        // }
        return res;
      })
    );
}
getAllDepartments(): Observable<any> {
  return this.httpService
  .makeGetReq( this.configuration.dept)
  .pipe(
    map((res : any) => {
      return res;
    })
  )
}
editDesignationDetail(desigDetails: any, id:string): Observable<any> {
  const x = this.configuration.getDesig + "/"+id; 
  return this.httpService.makePutReq(desigDetails,x);
}




 ///*************************************Role************************/

 getRoleWithId(): Observable<any> {
  return this.httpService
    // .makeGetReq(this.configuration.getEmp, payLoad )
    //.makeGetReq(payLoad, this.configuration.getEmp)
    .makeGetReq(this.configuration.getRole)
    .pipe(
      map((res: any) => {
        //const responseBody = res.body;
        // if (res.status == "SUCCESS") {
        //   return res;
        // } else {
        //   return res.errorCode;
        // }
        return res;
      })
    );
}
getListRole(): Observable<any> {
  return this.httpService
    // .makeGetReq(this.configuration.getEmp, payLoad )
    .makeGetReq(this.configuration.getRole)
    .pipe(
      map((res: any) => {
        //const responseBody = res.body;
        // if (res.status == "SUCCESS") {
        //   return res;
        // } else {
        //   return res.errorCode;
        // }
        return res;
      })
    );
}
saveRoleDetail(roleDetails: any): Observable<any> {
  debugger
  return this.httpService
    // .makeGetReq(this.configuration.getEmp, payLoad )

    .makePostReq(roleDetails, this.configuration.getRole)
    .pipe(
      map((res: any) => {
        //const responseBody = res.body;
        // if (res.status == "SUCCESS") {
        //   return res;
        // } else {
        //   return res.errorCode;
        // }
        return res;
      })
    );
}
editRoleDetail(roleDetails: any, id: string): Observable<any> {
  const x = this.configuration.getRole + "/" + id;
  return this.httpService.makePutReq(roleDetails,x);
 }


 //#region Save office vaibhav by 17 Mar 2024
 saveOfficeDetail(officeDetails: any): Observable<any> {
  debugger
  return this.httpService
    // .makeGetReq(this.configuration.getEmp, payLoad )

    .makePostReq(officeDetails, this.configuration.office)
    .pipe(
      map((res: any) => {
        return res;
  })
);
}
 //#endregion




//#region Education 

 getEducationWithId(): Observable<any> {
  return this.httpService
    // .makeGetReq(this.configuration.getEmp, payLoad )
    //.makeGetReq(payLoad, this.configuration.getEmp)
    .makeGetReq(this.configuration.getEducation)
    .pipe(
      map((res: any) => {
        //const responseBody = res.body;
        // if (res.status == "SUCCESS") {
        //   return res;
        // } else {
        //   return res.errorCode;
        // }
        return res;
      })
    );
}
getListEducation(): Observable<any> {
  return this.httpService
    // .makeGetReq(this.configuration.getEmp, payLoad )
    .makeGetReq(this.configuration.getEducation)
    .pipe(
      map((res: any) => {
        //const responseBody = res.body;
        // if (res.status == "SUCCESS") {
        //   return res;
        // } else {
        //   return res.errorCode;
        // }
        return res;
      })
    );
}
saveEducationDetail(educationDetails: any): Observable<any> {
  debugger
  return this.httpService
    // .makeGetReq(this.configuration.getEmp, payLoad )

    .makePostReq(educationDetails, this.configuration.getEducation)
    .pipe(
      map((res: any) => {
        //const responseBody = res.body;
        // if (res.status == "SUCCESS") {
        //   return res;
        // } else {
        //   return res.errorCode;
        // }
        return res;
      })
    );
}
editEducationDetail(educationDetails: any, id: string): Observable<any> {
  const x = this.configuration.getEducation + "/" + id;
  return this.httpService.makePutReq(educationDetails, x);
}
 //#endregion


//#region 

 getJobTitleWithId(): Observable<any> {
  return this.httpService
    // .makeGetReq(this.configuration.getEmp, payLoad )
    //.makeGetReq(payLoad, this.configuration.getEmp)
    .makeGetReq(this.configuration.getJobTitle)
    .pipe(
      map((res: any) => {
        //const responseBody = res.body;
        // if (res.status == "SUCCESS") {
        //   return res;
        // } else {
        //   return res.errorCode;
        // }
        return res;
      })
    );
}
getListJobTitle(): Observable<any> {
  return this.httpService
    // .makeGetReq(this.configuration.getEmp, payLoad )
    .makeGetReq(this.configuration.getJobTitle)
    .pipe(
      map((res: any) => {
        //const responseBody = res.body;
        // if (res.status == "SUCCESS") {
        //   return res;
        // } else {
        //   return res.errorCode;
        // }
        return res;
      })
    );
}
saveJobTitleDetail(jobtitleDetails: any): Observable<any> {
  debugger
  return this.httpService
    // .makeGetReq(this.configuration.getEmp, payLoad )

    .makePostReq(jobtitleDetails, this.configuration.getJobTitle)
    .pipe(
      map((res: any) => {
        //const responseBody = res.body;
        // if (res.status == "SUCCESS") {
        //   return res;
        // } else {
        //   return res.errorCode;
        // }
        return res;
      })
    );
}
editJobTitleDetail(jobtitleDetails: any, id: string): Observable<any> {
  const x = this.configuration.getJobTitle + "/" + id;
  return this.httpService.makePutReq(jobtitleDetails,x);
 }

 ///////////////////////////Work Type***By Ganesh 16 April 2024/////////////////////////

 getWorkTypeWithId(): Observable<any> {
  return this.httpService
    .makeGetReq(this.configuration.getWorkType)
    .pipe(
      map((res: any) => {
        return res;
      })
    );
}
getListWorkType(): Observable<any> {
  return this.httpService
    .makeGetReq(this.configuration.getWorkType)
    .pipe(
      map((res: any) => {
        return res;
      })
    );
} 
saveWorkTypeDetail(worktypeDetails: any): Observable<any> {
  debugger
  return this.httpService
    .makePostReq(worktypeDetails, this.configuration.getWorkType)
    .pipe(
      map((res: any) => {
        return res;
      })
    );
}
editWorkTypeDetail(worktypeDetails: any, id: string): Observable<any> {
  const x = this.configuration.getWorkType + "/" + id;
  return this.httpService.makePutReq(worktypeDetails, x);
 }

 // #region  Bank***By Ganesh 16 April 2024 

  getBankWithId(): Observable<any> {
    return this.httpService
      .makeGetReq(this.configuration.getBank)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getListBank(): Observable<any> {
    return this.httpService
      .makeGetReq(this.configuration.getBank)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  saveBankDetail(bankDetails: any): Observable<any> {
    debugger
    return this.httpService
      .makePostReq(bankDetails, this.configuration.getBank)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  editBankDetail(bankDetails: any, id: string): Observable<any> {
    const x = this.configuration.getBank + "/" + id;
    return this.httpService.makePutReq(bankDetails, x);
  }

 //#endregion Bank
//#endregion

  // #region Family***By Ganesh 16 April 2024

  getFamilyWithId(): Observable<any> {
    return this.httpService
      .makeGetReq(this.configuration.family)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getListFamily(): Observable<any> {
    return this.httpService
      .makeGetReq(this.configuration.family)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  saveFamilyDetail(familyDetails: any): Observable<any> {
    debugger
    return this.httpService
      .makePostReq(familyDetails, this.configuration.family)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  editFamilyDetail(familyDetails: any, id: string): Observable<any> {
    const x = this.configuration.family + "/" + id;
    return this.httpService.makePutReq(familyDetails, x);
  }

 //#endregion

 // #region Employee Type***By Ganesh 16 April 2024

 getEmployeeTypeWithId(): Observable<any> {
  return this.httpService
    .makeGetReq(this.configuration.getEmpType)
    .pipe(
      map((res: any) => {
        return res;
      })
    );
}
getListEmployeeType(): Observable<any> {
  return this.httpService
    .makeGetReq(this.configuration.getEmpType)
    .pipe(
      map((res: any) => {
        return res;
      })
    );
}
saveEmployeeTypeDetail(employeetypeDetails: any): Observable<any> {
  debugger
  return this.httpService
    .makePostReq(employeetypeDetails, this.configuration.getEmpType)
    .pipe(
      map((res: any) => {
        return res;
      })
    );
}
editEmployeeTypeDetail(employeetypeDetails: any, id: string): Observable<any> {
  const x = this.configuration.getEmpType + "/" + id;
  return this.httpService.makePutReq(employeetypeDetails, x);
}
 //#endregion
 //#region Sub header
 menuItemsMaster = [
  { label: 'Office', iconClass: 'fas fa-user fa-fw me-2', routerLink: '../office' },
  { label: 'Department', iconClass: 'fas fa-user fa-fw me-2', routerLink: '../department' },
  { label: 'Designation', iconClass: 'fas fa-user fa-fw me-2', routerLink: '../designation' },
  { label: 'Eduction', iconClass: 'fas fa-user fa-fw me-2', routerLink: '../eduction' },
  { label: 'Work shift', iconClass: 'fas fa-user fa-fw me-2', routerLink: '../Workshift' },
  { label: 'Job Title', iconClass: 'fas fa-user fa-fw me-2', routerLink: '../jobTitle' },
  { label: 'Client', iconClass: 'fas fa-user fa-fw me-2', routerLink: '../client' },
  { label: 'Role', iconClass: 'fas fa-user fa-fw me-2', routerLink: '../role' },
  { label: 'Work Type', iconClass: 'fas fa-user fa-fw me-2', routerLink: '../WorkType' }
];
}
//#endregion


//#endregion
 
 