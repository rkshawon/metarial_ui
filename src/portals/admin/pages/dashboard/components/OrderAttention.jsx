import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function OrderAttention() {
  return (
    <Box sx={{marginTop: '4em'}}>
        <Box>
            <Typography sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#212B36'
            }}>
                Orders that need attention
            </Typography>
            <Typography sx={{
                fontSize: '12px',
                fontWeight: '500',
                color: '#A8A8A8'
            }}>
                Orders that need attention
            </Typography>
        </Box>
        <Box sx={{display: 'flex', marginTop: '2em'}}>
            <Box sx={{
                boxShadow: '0px 2px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)',
                width: '137px',
                height: '147px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography sx={{color: '#595959', fontWeight: '500', fontSize: '12px'}}> Orders</Typography>
                <Typography sx={{color: '#595959', fontWeight: '500', fontSize: '16px'}}> 15-20 Days</Typography>
                <Typography sx={{color: '#3366FF', fontWeight: '700', fontSize: '24px', marginTop: '.3em'}}> 880</Typography>
                <Box sx={{
                    backgroundColor: 'rgba(145, 85, 253, 0.25)',
                    borderRadius: '50px',
                    height: '17px',
                    width: '34px', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginTop: '.3em'
                }}>
                    <Typography sx={{color: '#9025FA', fontWeight: '700', fontSize: '9px'}}> 88%</Typography>
                </Box>
            </Box>
            <Box sx={{
                marginLeft: '2em',
                boxShadow: '0px 2px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)',
                width: '137px',
                height: '147px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography sx={{color: '#595959', fontWeight: '500', fontSize: '12px'}}> Orders</Typography>
                <Typography sx={{color: '#595959', fontWeight: '500', fontSize: '16px'}}> 20-30 Days</Typography>
                <Typography sx={{color: '#3366FF', fontWeight: '700', fontSize: '24px', marginTop: '.3em'}}> 120</Typography>
                <Box sx={{
                    backgroundColor: 'rgba(145, 85, 253, 0.25)',
                    borderRadius: '50px',
                    height: '17px',
                    width: '34px', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginTop: '.3em'
                }}>
                    <Typography sx={{color: '#9025FA', fontWeight: '700', fontSize: '9px'}}> 88%</Typography>
                </Box>
            </Box>
            <Box sx={{
                marginLeft: '2em',
                boxShadow: '0px 2px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)',
                width: '137px',
                height: '147px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography sx={{color: '#595959', fontWeight: '500', fontSize: '12px'}}> Orders</Typography>
                <Typography sx={{color: '#595959', fontWeight: '500', fontSize: '16px'}}> 30+ Days</Typography>
                <Typography sx={{color: '#3366FF', fontWeight: '700', fontSize: '24px', marginTop: '.3em'}}> 0</Typography>
                <Box sx={{
                    backgroundColor: 'rgba(145, 85, 253, 0.25)',
                    borderRadius: '50px',
                    height: '17px',
                    width: '34px', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginTop: '.3em'
                }}>
                    <Typography sx={{color: '#9025FA', fontWeight: '700', fontSize: '9px'}}> 0%</Typography>
                </Box>
            </Box>
        </Box>
        <Button variant="contained" sx={{
            backgroundColor: '#3366FF',
            width: '475px',
            height: '35px',
            borderRadius: '5px',
            boxShadow: '0px 8px 16px rgba(51, 102, 255, 0.24)',
            border: '1px solid #3366FF',
            margin: '2em 0 5em 0'
        }}>
            View Total Orders Overview
        </Button>
    </Box>
  )
}
