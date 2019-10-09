import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {GroceryService} from "./services/grocery.service";

@Injectable()
export class GroceryItemCategoriesResolve implements Resolve<String[]> {
  constructor(private groceryService: GroceryService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<String[]> {
    return this.groceryService.getCategories();
  }
}
