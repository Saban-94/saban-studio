'use client'
import { Badge } from '@/components/ui/badge'
import { Truck, Warehouse, Package, Ruler, Clock3, ShieldCheck, PlayCircle, FileText } from 'lucide-react'
import type { LogisticsProduct } from '@/types/catalog'

export function ProductCardPreview({ product }: { product: LogisticsProduct }) {
  const warehouse = product.warehouse === '4_haresh' ? 'סניף 4 החרש' : 'סניף 1 התלמיד'
  const truck = product.defaultTruck === 'crane_mercedes' ? 'חכמת מנוף' : 'עלי חלוקה'
  return <article className="preview-card">
    <div className="product-hero">
      <img src={product.imageUrl || '/placeholder.jpg'} alt={product.officialName || 'תמונת מוצר'} />
      <div className="hero-overlay"><Badge>{product.brand || 'מותג'}</Badge>{product.promoTag && <Badge className="promo">{product.promoTag}</Badge>}</div>
    </div>
    <div className="preview-body">
      <div className="eyebrow">תצוגת נועה AI · {product.category || 'קטגוריה'}</div>
      <h2>{product.officialName || 'שם המוצר יופיע כאן'}</h2><div className="sku">מק״ט {product.sku || '—'}</div>
      <div className="prices"><span>מחירון <b>₪{product.listPriceNis.toFixed(2)}</b></span><strong>קבלן ₪{product.contractorPriceNis.toFixed(2)}</strong></div>
      <div className="info-grid"><Info icon={<Package />} label="אריזה ומשקל" value={`${product.packagingUnit || '—'} · ${product.unitWeightKg || 0} ק״ג`} /><Info icon={<Warehouse />} label="משטח ולוגיסטיקה" value={`${product.unitsPerPallet || 0} יח׳ · פקדון ₪${product.palletDepositNis || 0}`} /><Info icon={<Warehouse />} label="מחסן מקור" value={warehouse} /><Info icon={<Truck />} label="משאית" value={truck} /></div>
      <section className="spec-section"><h3><Ruler /> מפרט וביצוע</h3><div className="spec-grid"><span>כיסוי <b>{product.coverageM2 || 0} מ״ר</b></span><span>עבודה <b>{product.openTimeMinutes || '—'}</b></span><span>ייבוש <b>{product.dryingTimeHours || '—'}</b></span><span>תקן <b>{product.officialStandard || '—'}</b></span></div><p>{product.applicationMethod || 'שיטת היישום תופיע כאן'}{product.coverageNotes && ` · ${product.coverageNotes}`}</p></section>
      {product.approvedSubstrates.length > 0 && <div className="tag-line"><ShieldCheck /> <span>{product.approvedSubstrates.join(' · ')}</span></div>}
      {product.mandatoryAddons.length > 0 && <section className="addons"><h3>מומלץ להוסיף</h3><div className="tags">{product.mandatoryAddons.map(item => <Badge variant="outline" key={item}>{item}</Badge>)}</div></section>}
      <div className="preview-footer">{product.youtubeUrl && <a href={product.youtubeUrl} target="_blank" rel="noreferrer"><PlayCircle /> סרטון הדרכה</a>}{product.tdsUrl && <a href={product.tdsUrl} target="_blank" rel="noreferrer"><FileText /> הורדת TDS</a>}</div>
      {product.aliases.length > 0 && <div className="aliases"><Clock3 /> נועה מזהה גם: {product.aliases.join(' · ')}</div>}
    </div>
  </article>
}
function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="info-item"><span className="info-icon">{icon}</span><small>{label}</small><b>{value}</b></div> }
