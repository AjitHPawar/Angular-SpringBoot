import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductService } from 'src/app/services/product.service';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  product: Product = new Product();
  productGridData: Product[] = [];
  addModalRef: BsModalRef;
  formMsg = '';
  tblmsg = '';
  rowData: [] = [];
  ///ad grid properties
  @ViewChild('agGrid') agGrid: AgGridAngular;
  columnDefs = [
    { field: 'id', filter: true, sortable: true, checkboxSelection: true },
    { field: 'name', filter: true, sortable: true },
    { field: 'price', filter: true, sortable: true },
  ];

  // rowData = [
  //   { id: 'Toyota', name: 'Celica', price: 35000 },
  //   { id: 'Ford', name: 'Mondeo', price: 32000 },
  //   { id: 'Porsche', name: 'Boxter', price: 72000 },
  // ];
  constructor(
    private modalService: BsModalService,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.service.getProductData().subscribe((data) => {
      console.log(data);
      if (data.success) {
        this.productGridData = data.data;
        this.rowData = data.data;
      } else {
        this.tblmsg = 'Products Loading Failed...';
      }
    });
  }
  openPopup(addModal: TemplateRef<any>) {
    this.addModalRef = this.modalService.show(addModal);
  }

  addProduct() {
    this.service.addProduct(this.product).subscribe((data) => {
      if (data.success) {
        this.formMsg = 'Product Added Successfully...';
      } else {
        this.formMsg = 'Failed To Add Product..';
      }
    });
  }
  editRowRecord(addModal: TemplateRef<any>) {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);

    if (selectedData.length >= 1) {
      this.modalService.show(addModal);
      this.product = selectedData[0];
    } else alert('Select row ...');
  }
  deleteRowRecord() {}
}
