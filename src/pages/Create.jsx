import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Create = ({ setOverview, setContent, setCreate }) => {
  const guardarEnLocalStorage = (datos) => {
    // Obtén los datos existentes de localStorage (si los hay)
    const tarjetasGuardadas = JSON.parse(localStorage.getItem('cards')) || [];
  
    // Agrega la nueva tarjeta a la lista
    tarjetasGuardadas.push(datos);
  
    // Guarda la lista actualizada en localStorage
    localStorage.setItem('cards', JSON.stringify(tarjetasGuardadas));
  };

  const formik = useFormik({
    initialValues:{img:'', titulo:'', descripcion:'', categoria:'', equipo:'', link:''},

    validationSchema:Yup.object({
      titulo:Yup.string()
      .required("Ingrese el Titulo")
      .min(3, "Minimo de 3 caracteres")
      .max(20, "Maximo de 20 caracteres"),
      descripcion:Yup.string()
      .required("Ingrese la descripcion")
      .min(50, "Minimo de 50 caracteres")
      .max(200, "Maximo de 200 caracteres"),
      categoria:Yup.string()
      .required("Ingrese la categoria")
      .oneOf(["Motor", "Mesa", "Equipo"], "Categoria no valida"),
      equipo:Yup.string()
      .required("Ingrese el equipo")
      .min(3, "Minimo de 3 caracteres")
      .max(15, "Maximo de 15 caracteres"),
      link:Yup.string()
      .required("Ingrese el link")
      .min(10, "Minimo de 10 caracteres")
      .max(50, "Maximo de 50 caracteres")
    }),
    
    onSubmit:values=>{
      console.log(values);
      guardarEnLocalStorage(values);
      setContent(true)
      setOverview(false)
      setCreate(false)
    }
  })
  
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="img" className="form-label mt-4">Link de la imagen</label>
          <input
            type="text"
            className="form-control"
            id="img"
            name="img"
            onChange={formik.handleChange}
            value={formik.values.img}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Titulo</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            name="titulo"
            onChange={formik.handleChange}
            value={formik.values.titulo}
          />
          {formik.errors.titulo && <div className="text-danger">{formik.errors.titulo}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripcion</label>
          <textarea
            className="form-control"
            id="descripcion"
            name="descripcion"
            onChange={formik.handleChange}
            value={formik.values.descripcion}
            maxLength={500} // Establece la longitud máxima de caracteres
            rows={4} // Establece el número de filas (altura)
            cols={50} // Establece el número de columnas (ancho)
          />

          {formik.errors.descripcion && <div className="text-danger">{formik.errors.descripcion}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="categoria" className="form-label">Categoria</label>
          <select
            className="form-select"
            id="categoria"
            name="categoria"
            onChange={formik.handleChange}
            value={formik.values.categoria}
          >
            <option value="" disabled>Seleccione una opción</option>
            <option value="Motor">Motor</option>
            <option value="Mesa">Mesa</option>
            <option value="Equipo">Equipo</option>
          </select>
          {formik.errors.categoria && <div className="text-danger">{formik.errors.categoria}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="equipo" className="form-label">Equipo</label>
          <input
            type="text"
            className="form-control"
            id="equipo"
            name="equipo"
            onChange={formik.handleChange}
            value={formik.values.equipo}
          />
          {formik.errors.equipo && <div className="text-danger">{formik.errors.equipo}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="link" className="form-label">Link</label>
          <input
            type="text"
            className="form-control"
            id="link"
            name="link"
            onChange={formik.handleChange}
            value={formik.values.link}
          />
          {formik.errors.link && <div className="text-danger">{formik.errors.link}</div>}
        </div>

        <button type="submit" className="btn btn-primary mb-3">Enviar</button>
      </form>
    </div>
  )
}

export default Create