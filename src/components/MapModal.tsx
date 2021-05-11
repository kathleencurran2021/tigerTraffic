import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React, { ReactElement, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { BuildingProps, Hoover } from './Building'
import { CheckinContext } from '../context/CheckinContext'
import { BuildingContext } from '../context/BuildingContext'
import { TimeContext } from '../context/TimeContext'
import { UseInterval } from './Stopwatch'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles({
  modal: {
    '& .MuiDialog-paper': {
      '@media (min-height: 800px)': {
        height: '40%',
        width: '90%',
      },
    },
  },
  text: {
    textAlign: 'center',
    marginTop: 0,
    '@media (min-height: 800px)': {
      fontSize: '2rem',
    },
  },
  modalText: {
    '@media (min-height: 800px)': {
      fontSize: '1.18rem',
    },
  },
  button: {
    justifyContent: 'center',
    '@media (min-height: 800px)': {
      marginTop: '1rem',
      height: '3rem',
      fontSize: '16px',
      padding: '12px',
    },
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
  const { time, setTime } = useContext(TimeContext)
  const [isPlaying, setPlaying] = useState<boolean>(false)
  const delay = 1000

  useEffect(() => {
    console.log('Checkin Context Modal:', checkin)
    console.log('Modal building', building)
  }, [checkin, building])

  const handleModalClick = () => {
    console.log('checked in?' + checkin)
    setCheckin(true)
    setBuilding(building)
    setPlaying(true)
    console.log('inside click', building)
    building.peopleInside += 1
    building.seatsAvailable -= 1
    handleClose()
  }

  UseInterval(
    () => {
      setTime(time + 1)
    },
    isPlaying ? delay : null
  )

  useEffect(() => {
    checkin ? setPlaying(!isPlaying) : setPlaying(false)
  }, [])

  useEffect(() => {
    if (building == Hoover && time == 5) {
      setPlaying(false)
    }
  })

  return (
    <Dialog
      id={'LOOOKING'}
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}>
      <DialogContent className={classes.modal}>
        <h1 className={classes.text}>{title}</h1>
        <Typography className={classes.modalText}>
          Capacity: {Building.capacity}{' '}
        </Typography>
        <Typography className={classes.modalText}>
          People currently inside: {Building.peopleInside}
        </Typography>
        {building.seatsAvailable != 0 ? (
          <Typography className={classes.modalText}>
            Seats Available: {Building.seatsAvailable}{' '}
          </Typography>
        ) : (
          <Typography className={classes.modalText}>
            Seats Available: <b>None</b>{' '}
          </Typography>
        )}

        {children}
        <DialogActions className={classes.button}>
          {building.seatsAvailable != 0 && checkin == false ? (
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
              disabled>
              Check In
            </Button>
          )}
          <Button
            className={classes.button}
            variant="contained"
            component={RouterLink}
            to={'/checkin'}>
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
