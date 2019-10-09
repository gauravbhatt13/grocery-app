import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {GroceryService} from "./services/grocery.service";

@Injectable()
export class GroceryItemsResolve implements Resolve<Object[]> {
  constructor(private groceryService: GroceryService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Object[]> {
    return this.groceryService.getAllItems();
  }
}
