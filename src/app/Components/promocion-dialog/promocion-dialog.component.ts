import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Promocion } from '../../Model/Usuario/Promocion';
import { ActivatedRoute } from '@angular/router';
import { InformacionService } from '../../Services/Info/informacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-promocion-dialog',
  templateUrl: './promocion-dialog.component.html',
  styleUrl: './promocion-dialog.component.css'
})
export class PromocionDialogComponent implements OnInit {
  //#region Antes
  // promocionForm: FormGroup;
  // promocion: Promocion | undefined;

  // constructor(
  //   @Inject(MAT_DIALOG_DATA) public data: { id: number },
  //   private promocionService: InformacionService,
  //   private fb: FormBuilder,
  //   public dialogRef: MatDialogRef<PromocionDialogComponent>
  // ) {
  //   this.promocionForm = this.fb.group({
  //     Id: [''],
  //     Titulo: ['', Validators.required],
  //     Descripcion: ['', Validators.required],
  //     Destino: ['', Validators.required],
  //     Precio: ['', [Validators.required, Validators.min(0)]]
  //   });
  // }

  // ngOnInit(): void {
  //   if (this.data.id) {
  //     this.promocionService.getPromocionById(this.data.id).subscribe(promo => {
  //       this.promocion = promo;
  //       if (promo) {
  //         this.promocionForm.setValue(promo);
  //       }
  //     });
  //   }
  // }

  // onSubmit(): void {
  //   if (this.promocionForm.valid) {
  //     const promocion = this.promocionForm.value;
  //     if (promocion.id) {
  //       this.promocionService.updatePromocion(promocion);
  //     } else {
  //       promocion.id = Date.now();
  //       this.promocionService.addPromocion(promocion);
  //     }
  //     this.dialogRef.close(true);
  //   }
  // }

  // closeDialog(): void {
  //   this.dialogRef.close();
  // }

  //#endregion

  promocionForm: FormGroup;
  promocion!: Promocion;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private promocionService: InformacionService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PromocionDialogComponent>
  ) {
    console.log("ID recibido en el constructor", this.data.id);
    this.promocionForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      destino: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    if (this.data.id) {
      console.log("ID para editar", this.data.id);
      this.promocionService.getPromocionById(this.data.id).subscribe(promo => {
        console.log("Promoción recibida", promo);
        this.promocion = promo;
        if (promo) {
          this.promocionForm.patchValue(promo);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.promocionForm.valid) {
      const promocion = this.promocionForm.value;
      if (this.data.id) { // Utiliza `this.data.id` para verificar si es una edición
        promocion.id = this.data.id; // Asigna el ID para la actualización
        this.promocionService.updatePromocion(promocion).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        this.promocionService.addPromocion(promocion).subscribe(
          response => {
            console.log('Promoción agregada con éxito');
            this.dialogRef.close(true); // Cerrar el diálogo después de agregar
          },
          error => {
            console.error('Error al agregar promoción:', error);
          }
        );
      }
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }


}