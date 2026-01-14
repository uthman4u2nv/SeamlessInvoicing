import { Component } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-accordions',
  standalone: true,
  imports: [AccordionModule, PageTitleComponent, CollapseModule, CommonModule],
  templateUrl: './ui-accordions.component.html',
  styleUrl: './ui-accordions.component.scss'
})
export class UiAccordionsComponent {


  isCollapsed = false;
  horizontalCollapsed = false;
  arrowCollapsed = false;
  filterCollapsed = false;
  blockCollapsed = false;
  inlineCollapsed = false;
  multiCollapseExample1 = false;
  multiCollapseExample2 = false;

  isFirstOpen = false;
  isSecondOpen = false;
  isThirdOpen = false;

  dAccOpen = false;
  dAccSecOpen = false;
  dAccThreeOpen = false;
  
  dPlusOpen = false;
  dPlusSecOpen = false;
  dPlusThreeOpen = false;

  isInnerFirstOpen = false;

  nestingOpen = false;
  nesting1Open = false;
  nesting2Open = false;
  nesting3Open = false;
  nesting4Open = false;
  nesting5Open = false;

  lIcon = false;
  lIconSec = false;
  lIconThree = false;

  aBorder = false;
  aBorderSec = false;

  aFillColoured = false;
  aFillColouredSec = false;
  aFillColouredThree = false;
  aFillColouredFour = false;
  aFillColouredFive = false;
  aFillColouredSix = false;

  breadCrumbItems!: Array<{}>;
  ngOnInit() {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Accordions', active: true }
    ];

    Prism.highlightAll();
  }


}
