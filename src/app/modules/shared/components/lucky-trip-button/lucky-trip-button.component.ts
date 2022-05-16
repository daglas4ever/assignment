import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-lucky-trip-button",
  templateUrl: "./lucky-trip-button.component.html",
  styleUrls: ["./lucky-trip-button.component.scss"],
})
export class LuckyTripButtonComponent implements OnInit {
  @Output("onLuckyTrip") onLuckyTrip = new EventEmitter<number>();
  @Input("cityName") cityName = "Random Location";
  constructor() {}

  ngOnInit(): void {}
  luckyTripBtn() {
    // Swal.fire("Lucky Trip", "You clicked the lucky trip button!", "info");
    // just some very random lucky trip implementation
    const random: any = Math.random() * 400;
    const randomId = parseInt(random, 10);
    this.onLuckyTrip.emit(randomId);
  }
}
