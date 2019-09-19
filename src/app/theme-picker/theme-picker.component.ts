import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  green:any
  orange:any
  red:any
  blue:any
  white:any
  private themeWrapper = document.querySelector('body');
  ngOnInit() {
    if (localStorage.getItem('theme'))
      this.global(JSON.parse(localStorage.getItem('theme')));

  }
  onSubmit(form) {
    
    this.global(form.value);
    localStorage.setItem('theme', JSON.stringify(form.value))
  }
  changeTheme(color){
    this.green = {
      globalButtonBackground: "#ABEBC6",
      globalButtonColor: "#145A32",
      globalNavBackground: "#50f011",
      globalNavColor: "#ffffff",
      // globalCardBackground: "",
      // globalCardColor: "",
      // globalFooterAlignment: "",
      // globalFooterBackground: "",
      // globalFooterColor: "",
    }
    this.orange = {
      globalNavBackground: "orange",
      globalNavColor: "#ffffff",
      globalButtonBackground: "#F0B27A",
      globalButtonColor: "#784212",
    }
    this.red = {
      globalNavBackground: "red",
      globalNavColor: "#ffffff",
      globalButtonBackground: "#943126 ",
      globalButtonColor: "#EC7063",
    }
    this.blue = {
      globalNavBackground: "blue",
      globalNavColor: "#ffffff",
      globalButtonBackground: "#1B4F72 ",
      globalButtonColor: "#85C1E9",
    }
    this.white={
      globalNavBackground: "white",
      globalNavColor: "black",
      globalButtonBackground: "white",
      globalButtonColor: "black",
    }

    if(color == '#50f011'){
      this.global(this.green)
    localStorage.setItem('theme', JSON.stringify(this.green))

    }else if(color == 'orange'){
      this.global(this.orange)
    localStorage.setItem('theme', JSON.stringify(this.orange))
    }else if(color == 'red'){
      this.global(this.red)
    localStorage.setItem('theme', JSON.stringify(this.red))
    }else if(color == 'blue'){
      this.global(this.blue)
    localStorage.setItem('theme', JSON.stringify(this.blue))
    }else if(color == 'white'){
      this.global(this.white)
    localStorage.setItem('theme', JSON.stringify(this.white))
    }
    
  }

  global(stylesheet) {
    console.log(stylesheet);

    // Navigation Styles
    if (stylesheet.globalNavColor) {
      this.themeWrapper.style.setProperty('--navColor', stylesheet.globalNavColor);
      
    }
    if (stylesheet.globalNavBackground) {
      this.themeWrapper.style.setProperty('--navBackground', stylesheet.globalNavBackground);
    }
    if (stylesheet.globalButtonBackground) {
      this.themeWrapper.style.setProperty('--buttonBackground', stylesheet.globalButtonBackground);
    }
    if (stylesheet.globalButtonColor) {
      this.themeWrapper.style.setProperty('--buttonColor', stylesheet.globalButtonColor);
    }

    // Card Styles
    if (stylesheet.globalCardColor) {
      this.themeWrapper.style.setProperty('--cardColor', stylesheet.globalCardColor);
    }
    if (stylesheet.globalNavBackground) {
      this.themeWrapper.style.setProperty('--cardBackground', stylesheet.globalCardBackground);
    }

    // Footer Styles
    if (stylesheet.globalFooterColor) {
      this.themeWrapper.style.setProperty('--footerColor', stylesheet.globalFooterColor);
    }
    if (stylesheet.globalFooterBackground) {
      this.themeWrapper.style.setProperty('--footerBackground', stylesheet.globalFooterBackground);
    }
    if (stylesheet.globalFooterAlignment) {
      this.themeWrapper.style.setProperty('--footerAlignment', stylesheet.globalFooterAlignment);
    }

    //Button Styles
    if (stylesheet.globalButtonColor) {
      this.themeWrapper.style.setProperty('--buttonColor', stylesheet.globalButtonColor);
    }
    if (stylesheet.globalButtonBackground) {
      this.themeWrapper.style.setProperty('--buttonBackground', stylesheet.globalButtonBackground);
    }
  }
}
