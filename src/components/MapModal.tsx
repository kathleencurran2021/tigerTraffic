import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React, { ReactElement, useContext, useEffect } from 'react'

import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { BuildingProps } from './Building'
import { CheckinContext } from '../context/CheckinContext'
import { BuildingContext } from '../context/BuildingContext'

const useStyles = makeStyles({
  modal: {},
  text: {
    textAlign: 'center',
    marginTop: 0,
  },
  button: {
    justifyContent: 'center',
  },
})

interface ModalProps {
  isOpen: boolean
  handleClose: () => void
  title: string
  children: ReactElement
  Building: BuildingProps
}

export const MapModal: React.FC<ModalProps> = ({
  isOpen,
  handleClose,
  title,
  children,
  Building,
}) => {
  const classes = useStyles()
  const { checkin, setCheckin } = useContext(CheckinContext)
  const { building, setBuilding } = useContext(BuildingContext)

  useEffect(() => {
    console.log('Checkin Context Modal:', checkin)
    console.log('Modal building', building)
  }, [checkin, building])

  const handleModalClick = () => {
    console.log('checked in?' + checkin)
    setCheckin(true)
    setBuilding(building)
    console.log('inside click', building)
    building.peopleInside += 1
    building.seatsAvailable -= 1
    handleClose()
  }

  // const handleView = () => {
  //   setBuilding(Building)
  // }

  return (
    <Dialog open={isOpen} onClose={handleClose} className={classes.modal}>
      <DialogContent>
        <h1 className={classes.text}>{title}</h1>
        <Typography>Capacity: {Building.capacity} </Typography>
        <Typography>
          People currently inside: {Building.peopleInside}
        </Typography>
        {building.seatsAvailable != 0 ? (
          <Typography>Seats Available: {Building.seatsAvailable} </Typography>
        ) : (
          <Typography>
            Seats Available: <b>None</b>{' '}
          </Typography>
        )}

        {children}
        <DialogActions className={classes.button}>
          {building.seatsAvailable != 0 ? (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => handleModalClick()}>
              Check In
            </Button>
          ) : (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              // onClick={handleModalClick}
              disabled>
              Check In
            </Button>
          )}
          <Button
            className={classes.button}
            variant="contained"
            component={RouterLink}
            to={'/checkin'}
            // onClick={handleView}
          >
            View More
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

MapModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
