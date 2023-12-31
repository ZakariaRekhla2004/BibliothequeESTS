"use client"
import DataTable from "@/components/DataTable"
import Refresh from "@/components/Refresh"
import { Card } from "@/components/ui/Card"
import MyImage from "@/components/ui/MyImage"
import { CustomColumnMenu } from "@/components/ui/x-data-grid-customization/CustomColumnMenu"
import { Modal } from "@mui/material"
import Button from "@mui/material/Button"
import { GridColDef } from "@mui/x-data-grid"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
export default function AddLivre({
  livre,
}: {
  livre?: {
    value?: Map<number, number>
    set: Dispatch<SetStateAction<Map<number, number>>>
  }
}) {
  const [open, setOpen] = useState(false)
  const [livres, setLivres] = useState([])
  useEffect(() => {
    fetch("/api/livre", { method: "POST", cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setLivres(data))
    return () => {
      setLivres([])
    }
  }, [])

  const Columns: GridColDef[] = [
    {
      field: "check",
      headerName: "",
      width: 20,
      renderCell(params) {
        return (
          <input
            type='checkbox'
            onChange={(e) => {
              if (e.currentTarget.checked) {
                const clone = new Map(livre?.value)
                clone.set(params.row.ID_LIVRE, 1)
                livre?.set(clone)
              } else {
                const clone = new Map(livre?.value)
                clone.delete(params.row.ID_LIVRE)
                livre?.set(clone)
              }
            }}
            checked={livre?.value?.has(params.row.ID_LIVRE)}
          />
        )
      },
    },
    {
      field: "PAGE_DE_GARDE",
      headerName: "",
      width: 90,
      type: "string",
      hideable: false,
      renderCell(params) {
        return (
          <div className='relative w-full h-4/5'>
            <MyImage src={params.row.PAGE_DE_GARDE || ""} alt='page de garde' />
          </div>
        )
      },
    },
    {
      field: "TITRE",
      headerName: "Titre",
      flex: 1.5,
      type: "string",
      hideable: false,
    },
    {
      field: "AUTEUR",
      headerName: "Auteur",
      flex: 1.5,
      type: "string",
      hideable: false,
    },
    {
      field: "EDITEUR",
      flex: 1,
      headerName: "Editeur",
      type: "string",
      hideable: false,
    },
    {
      field: "DATE_EDITION",
      headerName: "date Edition",
      flex: 1,
      type: "string",
    },
    { field: "CODE", headerName: "Code", flex: 1, type: "number" },
    {
      field: "PRIX",
      flex: 1,
      headerName: "Prix",
      type: "number",
      hideable: false,
    },
    {
      field: "QTE",
      renderCell(params) {
        const Disabled = !livre?.value?.has(params.row.ID_LIVRE)
        return (
          <input
            type='number'
            className='w-4/5 h-4/5 text-center'
            disabled={Disabled}
            onChange={(e) => {
              const clone = new Map(livre?.value)
              clone.set(params.row.ID_LIVRE, parseInt(e.target.value))
              livre?.set(clone)
            }}
            value={livre?.value?.get(params.row.ID_LIVRE) || 0}
          />
        )
      },
    },
  ]

  return (
    <>
      <input type='hidden' name='livre' />
      <button
        onClick={(e) => {
          e.preventDefault()
          setOpen(true)
        }}
        className="className='h-10 flex text-xl items-center justify-center transition-colors px-2 rounded-md text-white bg-sky-950 hover:bg-sky-600 active:bg-sky-200'"
      >
        Ajouter Livre
      </button>
      <Refresh /> 
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className='flex justify-center items-center'
      >
        <div className='h-4/5 w-4/5'>
          <Card type={"full"}>
            <DataTable
              columns={Columns}
              customSlots={{
                columnMenu: CustomColumnMenu,
              }}
              autoPageSize
              rows={livres}
              ID='ID_LIVRE'
            />
            <Button
              size={"large"}
              variant='contained'
              sx={{
                fontWeight: 900,
              }}
            >
              Ajouter
            </Button>
          </Card>
        </div>
      </Modal>
    </>
  )
}
