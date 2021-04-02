//this is where I want the modal to pop up
//should be able to populate the modal based on what the capacity requirements are for a space
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  Modal,
  Typography,
} from '@material-ui/core'
import React, { ReactElement } from 'react'

import PropTypes from 'prop-types'
import { CheckInPage } from '../pages/CheckInPage'
import { Link as RouterLink } from 'react-router-dom'
import { BuildingProps } from './Building'

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
  return (
    <Dialog open={isOpen} onClose={handleClose} className={classes.modal}>
      <DialogContent>
        <h1 className={classes.text}>{title}</h1>
        <Typography>
          People currently studying: {Building.peopleInside}
        </Typography>
        <Typography>Capacity: {Building.capacity} </Typography>
        <Typography>Seats Available: {Building.seatsAvailable} </Typography>
        {children}
        <DialogActions className={classes.button}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            component={RouterLink}
            to={'/checkin'}
          >
            Check In
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
