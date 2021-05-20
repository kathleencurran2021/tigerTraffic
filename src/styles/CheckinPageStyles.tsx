import { styled } from '@material-ui/core'

const CheckinPageContent = styled('div')({
  overflow: 'scroll',
  maxHeight: '100%',
  '& .Julian-details': {
    display: 'block',
  },
  '& .Hoover-details ': {
    display: 'block',
  },
})

export { CheckinPageContent }
