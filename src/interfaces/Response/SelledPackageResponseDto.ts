export interface SelledPackageResponseDto    {
    id: number,
    demoPackageId: number,
    demoPackages: {
      id: number,
      packageName: string,
      descriptions: string,
      numberOfDays: number,
      numberOfSessions: number,
      packagePrice: number,
      type: string,
      branch: string
    },
    staffId: number,
    staff: {
      id: number,
      phone: number,
      firstName: string,
      lastName: string,
      email: string,
      dob: Date,
      address: string,
      position: string
    },
    customerId: number,
    customer: {
      id: number,
      phone: number,
      firstName: string,
      lastName: string,
      email: string,
      dob: Date,
      address: string,
      height: number,
      weight: number,
      muscleRatio: number,
      fatRatio: number,
      visceralFatLevels: number
    },
    createPackageTrainer: number,
    trainPackageTrainer: number,
    startDate: Date,
    endDate: Date
    schedules: [
      {
        day: number,
        time: number
      },
      {
        day: number,
        time: number
      }
    ],
    isReceived: boolean
}