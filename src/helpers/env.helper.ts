/* eslint-disable max-len */
interface EnvSchema {
  name: string
  description: string
  required: boolean
  example: string
  values?: string[]
}

const envSchemaArray: EnvSchema[] = [
  {
    name: 'LOG_LEVEL',
    description: 'Specifies the log level that the console should print',
    required: true,
    values: ['debug', 'info'],
    example: 'info'
  },
  {
    name: 'PORT',
    description: 'PORT in which the app runs',
    required: true,
    example: '3000'
  },
  {
    name: 'ENV',
    description: 'current environment',
    required: true,
    values: ['DEV', 'PROD'],
    example: ''
  },
  {
    name: 'ANKR_ENDPOINT',
    description: 'Ankr endpoint',
    required: true,
    example: 'https://url.com'
  },
]

const formatDisplay = (missingEnvVars: any[], invalidValues: any[]) => {
  let formattedList = []
  if (missingEnvVars.length > 0) formattedList = ['Missing vars', ...missingEnvVars]
  if (invalidValues.length > 0) formattedList = [...formattedList, 'Invalid values', ...invalidValues]

  if (formattedList.length > 0) {
    throw new Error(`CATCH ${JSON.stringify(formattedList)}`)
  }
}

export const checkEnvironmentVars = () => {
  const missingEnvVars: EnvSchema[] = []
  const invalidValues: EnvSchema[] = []
  const envs: string[] = Object.keys(process.env)

  for (const schema of envSchemaArray) {
    const foundEnv = envs.find((x) => x === schema.name)

    if (schema.required && (!foundEnv || !process.env[schema.name])) {
      missingEnvVars.push(schema)
      continue
    }

    if (schema.values && schema.values.length > 0 && process.env[schema.name]) {
      const value: string = process.env[schema.name]
      const validValue = schema.values.find((x) => x === value)
      if (!validValue) {
        invalidValues.push(schema)
        continue
      }
    }
  }
  formatDisplay(missingEnvVars, invalidValues)
}
