export interface LogisticsProduct {
  sku: string
  officialName: string
  category: string
  brand: string
  listPriceNis: number
  contractorPriceNis: number
  promoTag?: string
  packagingUnit: string
  unitWeightKg: number
  unitsPerPallet: number
  palletDepositNis: number
  coverageM2: number
  coverageNotes: string
  openTimeMinutes: string
  dryingTimeHours: string
  applicationMethod: string
  officialStandard: string
  approvedSubstrates: string[]
  mandatoryAddons: string[]
  imageUrl: string
  youtubeUrl?: string
  tdsUrl?: string
  warehouse: '4_haresh' | '1_talmid'
  defaultTruck: 'crane_mercedes' | 'flatbed_isuzu'
  aliases: string[]
  updatedAt?: unknown
}

export const emptyProduct: LogisticsProduct = {
  sku: '', officialName: '', category: 'מליטה ודבקים', brand: 'נשר', listPriceNis: 0,
  contractorPriceNis: 0, promoTag: '', packagingUnit: 'שק 25 ק"ג', unitWeightKg: 25,
  unitsPerPallet: 40, palletDepositNis: 0, coverageM2: 0, coverageNotes: '',
  openTimeMinutes: '', dryingTimeHours: '', applicationMethod: '', officialStandard: '',
  approvedSubstrates: [], mandatoryAddons: [], imageUrl: '', youtubeUrl: '', tdsUrl: '',
  warehouse: '4_haresh', defaultTruck: 'crane_mercedes', aliases: []
}

export const seedProducts: LogisticsProduct[] = [
  { ...emptyProduct, sku: '10025', officialName: 'מלט נשר 25 ק״ג', category: 'מליטה ודבקים', brand: 'נשר', listPriceNis: 28, contractorPriceNis: 24.5, promoTag: 'מבצע החודש', packagingUnit: 'שק 25 ק״ג', unitWeightKg: 25, unitsPerPallet: 40, palletDepositNis: 60, coverageM2: 5, coverageNotes: 'לפי 5 ק״ג למ״ר', openTimeMinutes: 'עד 60 דקות ב-20°C', dryingTimeHours: '24 שעות לדריכה', applicationMethod: 'ערבוב ויישום במאלג׳', officialStandard: 'ת״י 1924', approvedSubstrates: ['בטון', 'בלוק שחור'], mandatoryAddons: ['פקדון משטח 60060'], imageUrl: '/placeholder.jpg', aliases: ['מלט', 'שק אפור', 'נשר 25'], warehouse: '4_haresh', defaultTruck: 'crane_mercedes' },
  { ...emptyProduct, sku: '60002', officialName: 'טיט תרמוקיר TS10', category: 'מליטה ודבקים', brand: 'תרמוקיר', listPriceNis: 34, contractorPriceNis: 29, packagingUnit: 'שק 25 ק״ג', unitWeightKg: 25, unitsPerPallet: 60, palletDepositNis: 60, coverageM2: 4.8, coverageNotes: 'בעובי 5 מ״מ', openTimeMinutes: 'כ-30 דקות', dryingTimeHours: '48 שעות', applicationMethod: 'מריחה במאלג׳ משונן', officialStandard: 'ת״י 4004', approvedSubstrates: ['בטון', 'טיח'], mandatoryAddons: ['פריימר'], imageUrl: '/placeholder.jpg', aliases: ['טיט לבן', 'תרמוקיר'], warehouse: '1_talmid', defaultTruck: 'flatbed_isuzu' }
]

export const categories = ['הכל', 'אגרגטים', 'מליטה ודבקים', 'גבס', 'בלוקים', 'איטום']
export const brands = ['הכל', 'נשר', 'סיקה', 'אורבונד', 'מיסטר פיקס', 'טמבור', 'תרמוקיר']
