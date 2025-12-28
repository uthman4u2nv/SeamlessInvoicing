import { Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard/dashboard.component';
import { ApexLineComponent } from '../pages/charts/apex-line/apex-line.component';
import { ApexAreaComponent } from '../pages/charts/apex-area/apex-area.component';
import { ChartsApexBarComponent } from '../pages/charts/charts-apex-bar/charts-apex-bar.component';
import { ChartsApexMixedComponent } from '../pages/charts/charts-apex-mixed/charts-apex-mixed.component';
import { ChartsApexTimelineComponent } from '../pages/charts/charts-apex-timeline/charts-apex-timeline.component';
import { ChartsApexCandlestickComponent } from '../pages/charts/charts-apex-candlestick/charts-apex-candlestick.component';
import { ChartsApexBoxplotComponent } from '../pages/charts/charts-apex-boxplot/charts-apex-boxplot.component';
import { ChartsApexBubbleComponent } from '../pages/charts/charts-apex-bubble/charts-apex-bubble.component';
import { ChartsApexScatterComponent } from '../pages/charts/charts-apex-scatter/charts-apex-scatter.component';
import { ChartsApexHeatmapComponent } from '../pages/charts/charts-apex-heatmap/charts-apex-heatmap.component';
import { ChartsApexTreemapComponent } from '../pages/charts/charts-apex-treemap/charts-apex-treemap.component';
import { ChartsApexPieComponent } from '../pages/charts/charts-apex-pie/charts-apex-pie.component';
import { ChartsApexRadialbarComponent } from '../pages/charts/charts-apex-radialbar/charts-apex-radialbar.component';
import { ChartsApexRadarComponent } from '../pages/charts/charts-apex-radar/charts-apex-radar.component';
import { ChartsApexPolarComponent } from '../pages/charts/charts-apex-polar/charts-apex-polar.component';
import { ApexColumnComponent } from '../pages/charts/charts-apex-column/charts-apex-column.component';
import { IconsRemixComponent } from '../pages/icons/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from '../pages/icons/icons-boxicons/icons-boxicons.component';
import { IconsMaterialdesignComponent } from '../pages/icons/icons-materialdesign/icons-materialdesign.component';
import { IconsBootstrapComponent } from '../pages/icons/icons-bootstrap/icons-bootstrap.component';
import { IconsLineawesomeComponent } from '../pages/icons/icons-lineawesome/icons-lineawesome.component';
import { MapsGoogleComponent } from '../pages/maps/maps-google/maps-google.component';
import { MapsLeafletComponent } from '../pages/maps/maps-leaflet/maps-leaflet.component';
import { TablesBasicComponent } from '../pages/tables/tables-basic/tables-basic.component';
import { GridjsComponent } from '../pages/tables/tables-gridjs/gridjs.component';
import { AdvanceUiSweetalertsComponent } from '../pages/advance-ui/advance-ui-sweetalerts/advance-ui-sweetalerts.component';
import { AdvanceUiNestableComponent } from '../pages/advance-ui/advance-ui-nestable/advance-ui-nestable.component';
import { AdvanceUiScrollbarComponent } from '../pages/advance-ui/advance-ui-scrollbar/advance-ui-scrollbar.component';
import { AdvanceUiSwiperComponent } from '../pages/advance-ui/advance-ui-swiper/advance-ui-swiper.component';
import { AdvanceUiRatingsComponent } from '../pages/advance-ui/advance-ui-ratings/advance-ui-ratings.component';
import { AdvanceUiHighlightComponent } from '../pages/advance-ui/advance-ui-highlight/advance-ui-highlight.component';
import { AdvanceUiScrollspyComponent } from '../pages/advance-ui/advance-ui-scrollspy/advance-ui-scrollspy.component';
import { UiAlertsComponent } from '../pages/bootstrap-ui/ui-alerts/ui-alerts.component';
import { UiBadgesComponent } from '../pages/bootstrap-ui/ui-badges/ui-badges.component';
import { UiButtonsComponent } from '../pages/bootstrap-ui/ui-buttons/ui-buttons.component';
import { UiColorsComponent } from '../pages/bootstrap-ui/ui-colors/ui-colors.component';
import { UiCardsComponent } from '../pages/bootstrap-ui/ui-cards/ui-cards.component';
import { UiCarouselComponent } from '../pages/bootstrap-ui/ui-carousel/ui-carousel.component';
import { UiDropdownsComponent } from '../pages/bootstrap-ui/ui-dropdowns/ui-dropdowns.component';
import { UiGridComponent } from '../pages/bootstrap-ui/ui-grid/ui-grid.component';
import { UiImagesComponent } from '../pages/bootstrap-ui/ui-images/ui-images.component';
import { UiTabsComponent } from '../pages/bootstrap-ui/ui-tabs/ui-tabs.component';
import { UiAccordionsComponent } from '../pages/bootstrap-ui/ui-accordions/ui-accordions.component';
import { UiModalsComponent } from '../pages/bootstrap-ui/ui-modals/ui-modals.component';
import { UiOffcanvasComponent } from '../pages/bootstrap-ui/ui-offcanvas/ui-offcanvas.component';
import { UiPlaceholdersComponent } from '../pages/bootstrap-ui/ui-placeholders/ui-placeholders.component';
import { UiProgressComponent } from '../pages/bootstrap-ui/ui-progress/ui-progress.component';
import { UiNotificationsComponent } from '../pages/bootstrap-ui/ui-notifications/ui-notifications.component';
import { UiMediaComponent } from '../pages/bootstrap-ui/ui-media/ui-media.component';
import { UiEmbedVideoComponent } from '../pages/bootstrap-ui/ui-embed-video/ui-embed-video.component';
import { UiTypographyComponent } from '../pages/bootstrap-ui/ui-typography/ui-typography.component';
import { UiListsComponent } from '../pages/bootstrap-ui/ui-lists/ui-lists.component';
import { UiGeneralComponent } from '../pages/bootstrap-ui/ui-general/ui-general.component';
import { UiUtilitiesComponent } from '../pages/bootstrap-ui/ui-utilities/ui-utilities.component';
import { InvoiceComponent } from '../pages/invoice/invoice/invoice.component';
import { InvoiceAddComponent } from '../pages/invoice/invoice-add/invoice-add.component';
import { InvoiceDetailsComponent } from '../pages/invoice/invoice-details/invoice-details.component';
import { PaymentsComponent } from '../pages/invoice/payments/payments.component';
import { TaxesComponent } from '../pages/invoice/taxes/taxes.component';
import { ProductListComponent } from '../pages/invoice/product-list/product-list.component';
import { ProductAddComponent } from '../pages/invoice/product-add/product-add.component';
import { PaymentSummaryComponent } from '../pages/invoice/payment-summary/payment-summary.component';
import { SaleReportComponent } from '../pages/invoice/sale-report/sale-report.component';
import { ExpensesReportComponent } from '../pages/invoice/expenses-report/expenses-report.component';
import { UserComponent } from '../pages/invoice/user/user.component';
import { TransactionListComponent } from '../pages/invoice/transaction-list/transaction-list.component';
import { TransactionNewComponent } from '../pages/invoice/transaction-new/transaction-new.component';
import { FormsElementsComponent } from '../pages/forms/forms-elements/forms-elements.component';
import { FormsSelectComponent } from '../pages/forms/forms-select/forms-select.component';
import { FormsCheckboxsRadiosComponent } from '../pages/forms/forms-checkboxs-radios/forms-checkboxs-radios.component';
import { FormsPickersComponent } from '../pages/forms/forms-pickers/forms-pickers.component';
import { FormsMasksComponent } from '../pages/forms/forms-masks/forms-masks.component';
import { FormsAdvancedComponent } from '../pages/forms/forms-advanced/forms-advanced.component';
import { FormsRangeSlidersComponent } from '../pages/forms/forms-range-sliders/forms-range-sliders.component';
import { FormsValidationComponent } from '../pages/forms/forms-validation/forms-validation.component';
import { FormsFileUploadsComponent } from '../pages/forms/forms-file-uploads/forms-file-uploads.component';
import { FormsLayoutsComponent } from '../pages/forms/forms-layouts/forms-layouts.component';
import { FormsTomSelectComponent } from '../pages/forms/forms-tom-select/forms-tom-select.component';
import { FormsEditorsComponent } from '../pages/forms/forms-editors/forms-editors.component';
import { FormsWizardComponent } from '../pages/forms/forms-wizard/forms-wizard.component';

export const PAGE_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },

  // Charts
  { path: 'charts-apex-line', component: ApexLineComponent },
  { path: 'charts-apex-area', component: ApexAreaComponent },
  { path: 'charts-apex-column', component: ApexColumnComponent },
  { path: 'charts-apex-bar', component: ChartsApexBarComponent },
  { path: 'charts-apex-mixed', component: ChartsApexMixedComponent },
  { path: 'charts-apex-timeline', component: ChartsApexTimelineComponent },
  { path: 'charts-apex-candlestick', component: ChartsApexCandlestickComponent },
  { path: 'charts-apex-boxplot', component: ChartsApexBoxplotComponent },
  { path: 'charts-apex-bubble', component: ChartsApexBubbleComponent },
  { path: 'charts-apex-scatter', component: ChartsApexScatterComponent },
  { path: 'charts-apex-heatmap', component: ChartsApexHeatmapComponent },
  { path: 'charts-apex-treemap', component: ChartsApexTreemapComponent },
  { path: 'charts-apex-pie', component: ChartsApexPieComponent },
  { path: 'charts-apex-radialbar', component: ChartsApexRadialbarComponent },
  { path: 'charts-apex-radar', component: ChartsApexRadarComponent },
  { path: 'charts-apex-polar', component: ChartsApexPolarComponent },
  
  // Icons
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-materialdesign', component: IconsMaterialdesignComponent },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  { path: 'icons-lineawesome', component: IconsLineawesomeComponent },
  
  // Maps
  { path: 'maps-google', component: MapsGoogleComponent },
  { path: 'maps-leaflet', component: MapsLeafletComponent },
  
  // Tables
  { path: 'tables-basic', component: TablesBasicComponent }, 
  { path: 'tables-gridjs', component: GridjsComponent },
  // { path: 'tables-listjs', component: ListjsComponent },
  
  // AdvanceUI
  { path: 'advance-ui-sweetalerts', component: AdvanceUiSweetalertsComponent},
  { path: 'advance-ui-nestable', component: AdvanceUiNestableComponent},
  { path: 'advance-ui-scrollbar', component: AdvanceUiScrollbarComponent},
  { path: 'advance-ui-swiper', component: AdvanceUiSwiperComponent},
  { path: 'advance-ui-ratings', component: AdvanceUiRatingsComponent},
  { path: 'advance-ui-highlight', component: AdvanceUiHighlightComponent},
  { path: 'advance-ui-scrollspy', component: AdvanceUiScrollspyComponent},
  
  // Bootstrap UI
  { path: 'ui-alerts', component: UiAlertsComponent},
  { path: 'ui-badges', component: UiBadgesComponent},
  { path: 'ui-buttons', component: UiButtonsComponent},
  { path: 'ui-colors', component: UiColorsComponent},
  { path: 'ui-cards', component: UiCardsComponent},
  { path: 'ui-carousel', component: UiCarouselComponent},
  { path: 'ui-dropdowns', component: UiDropdownsComponent},
  { path: 'ui-grid', component: UiGridComponent},
  { path: 'ui-images', component: UiImagesComponent},
  { path: 'ui-tabs', component: UiTabsComponent},
  { path: 'ui-accordions', component: UiAccordionsComponent},
  { path: 'ui-modals', component: UiModalsComponent},
  { path: 'ui-offcanvas', component: UiOffcanvasComponent},
  { path: 'ui-placeholders', component: UiPlaceholdersComponent},
  { path: 'ui-progress', component: UiProgressComponent},
  { path: 'ui-notifications', component: UiNotificationsComponent},
  { path: 'ui-media', component: UiMediaComponent},
  { path: 'ui-embed-video', component: UiEmbedVideoComponent},
  { path: 'ui-typography', component: UiTypographyComponent},
  { path: 'ui-lists', component: UiListsComponent},
  { path: 'ui-general', component: UiGeneralComponent},
  { path: 'ui-utilities', component: UiUtilitiesComponent},
  
  // Invoice Management
  { path: 'invoice', component: InvoiceComponent},
  { path: 'invoice-add', component: InvoiceAddComponent},
  { path: 'invoice-details', component: InvoiceDetailsComponent},
  { path: 'payments', component: PaymentsComponent},
  { path: 'taxes', component: TaxesComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'product-add', component: ProductAddComponent},
  { path: 'payment-summary', component: PaymentSummaryComponent},
  { path: 'sale-report', component: SaleReportComponent},
  { path: 'expenses-report', component: ExpensesReportComponent},
  { path: 'user', component: UserComponent},
  { path: 'transaction-list', component: TransactionListComponent},
  { path: 'transaction-new', component: TransactionNewComponent},

  // Forms
  { path: 'forms-elements', component: FormsElementsComponent},
  { path: 'forms-select', component: FormsSelectComponent},
  { path: 'forms-checkboxs-radios', component: FormsCheckboxsRadiosComponent},
  { path: 'forms-pickers', component: FormsPickersComponent},
  { path: 'forms-masks', component: FormsMasksComponent},
  { path: 'forms-advanced', component: FormsAdvancedComponent},
  { path: 'forms-range-sliders', component: FormsRangeSlidersComponent},
  { path: 'forms-validation', component: FormsValidationComponent},
  { path: 'forms-editors', component: FormsEditorsComponent},
  { path: 'forms-file-uploads', component: FormsFileUploadsComponent},
  { path: 'forms-layouts', component: FormsLayoutsComponent},
  { path: 'forms-tom-select', component: FormsTomSelectComponent},
  { path: 'forms-wizard', component: FormsWizardComponent},



]
