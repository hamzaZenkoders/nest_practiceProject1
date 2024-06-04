import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from 'src/decorators/roles.decorators';

@Injectable()
export class AuthorizationGuard implements CanActivate {
 constructor(private reflector: Reflector){}


  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

   // console.log(request);

    const requiredRole = this.reflector.getAllAndOverride(ROLES_KEY, [context.getHandler(),context.getClass()]);

    console.log("INSIDE AUTHORIZATION GUARD");


    console.log(requiredRole);
    //return validateRequest(request);
     const userRole = request.user.role;    

     console.log(userRole);

     if(requiredRole !== userRole) return false;

     return true;
/* 
   
    return true; */
  }
}