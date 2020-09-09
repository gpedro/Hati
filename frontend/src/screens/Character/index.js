import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { playerGetCharacter } from '../../actions/PlayerActions'
import { genders, characterVocations, towns } from '../../config'
import { dataAtualFormatada } from '../../helpers/datetime'
import Menu from '../Layouts/Menu'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import './styles.css'


const Character = ({ playerGetCharacter }) => {

  const { name } = useParams()
  const [characterPage, setCharacterPage] = useState([])

  //items mocado.
  const helmet = 'https://www.tibiawiki.com.br/images/c/cd/Steel_Helmet.gif'
  const armor = 'https://www.tibiawiki.com.br/images/2/2e/Plate_Armor.gif'
  const legs = 'https://www.tibiawiki.com.br/images/6/6f/Plate_Legs.gif'
  const boots = 'https://www.tibiawiki.com.br/images/9/94/Leather_Boots.gif'
  const shield = 'https://www.tibiawiki.com.br/images/5/58/Dwarven_Shield.gif'
  const melee = 'https://www.tibiawiki.com.br/images/2/26/Mace.gif'
  const amulet = 'https://www.tibiawiki.com.br/images/3/3e/Crystal_Necklace.gif'
  const ring = 'https://www.tibiawiki.com.br/images/a/a0/Crystal_Ring.gif'
  const backpack = 'https://www.tibiawiki.com.br/images/9/9a/Backpack.gif'
  
  useEffect(() => {
      playerGetCharacter(name)

      .then(({ payload }) => {
        const newData = payload.data.data
        setCharacterPage(newData)

      }).catch((err) => {
        alert('o jogador não foi carregado.')
        console.log(err)
      })

  }, [name, playerGetCharacter])



  return (
    <div className="mod-bg-1">
      <div className="page-wrapper">
        <div className="page-inner">
          <Menu />

          <div className="page-content-wrapper">
            <Header />

            <main id="js-page-content" role="main" className="page-content">

                        <div className="row">
                            <div className="col-lg-6 col-xl-3 order-lg-1 order-xl-1">

                            <div id="c_1" className="card border shadow-0 mb-g shadow-sm-hover" data-filter-tags="oliver kopyov">
                                    <div className="card-body border-faded border-top-0 border-left-0 border-right-0 rounded-top">
                                        <div className="d-flex flex-row align-items-center">
                                            <span className="status status-success mr-3">
                                                <span className="rounded-circle profile-image d-block " 
                                                style={{  
                                                backgroundImage: `url("https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif")`,
                                                backgroundSize: 'cover',
                                                }}></span>
                                            </span>
                                            <div className="info-card-text flex-1">
                                                <span className="fs-xl text-truncate text-truncate-lg text-primary" aria-expanded="false">
                                                    {characterPage.name}
                                                </span>
                                                <span className="text-truncate text-truncate-xl">Leader of Mata Rindo</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 collapse show">
                                        
                                    <table className="table table-striped table-condensed">
                                        <tbody>
                                            <tr>
                                                <td>
                                                <span className="fs-xl text-truncate text-truncate-lg text-primary" aria-expanded="false">
                                                    Sex:
                                                </span>
                                                </td>
                                                <td>
                                                    { genders[characterPage.sex] }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="fs-xl text-truncate text-truncate-lg text-primary" aria-expanded="false">
                                                        Level:
                                                    </span>
                                                </td>
                                                <td className="d-inline-flex border border-primary text-primary width-2 height-2 rounded-circle fw-500 mr-2 align-items-center justify-content-center">{characterPage.level}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="fs-xl text-truncate text-truncate-lg text-primary" aria-expanded="false">
                                                        Vocation:
                                                    </span>
                                                </td>
                                                <td>{ characterVocations[characterPage.vocation] }</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="fs-xl text-truncate text-truncate-lg text-primary" aria-expanded="false">
                                                       Created:
                                                    </span>
                                                </td>
                                                <td>
                                                    {dataAtualFormatada(characterPage.createdAt)}
                                                </td>
                                            </tr>

                                            <tr>
                                               <td>
                                                    <span className="fs-xl text-truncate text-truncate-lg text-primary" aria-expanded="false">
                                                        Resident:
                                                    </span>
                                                </td>
                                                <td>{ towns[characterPage.town_id] }</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                        <div className="row no-gutters row-grid">
                                       
                                        <div className="col-6">
                                            <div className="text-center py-3">
                                                <h5 className="mb-0 fw-700">
                                                    31
                                                    <small className="mb-0 fs-xl text-truncate text-truncate-lg text-primary">Premium Account</small>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="text-center py-3">
                                                <h5 className="mb-0 fw-700">
                                                    371
                                                    <small className="mb-0 fs-xl text-truncate text-truncate-lg text-primary">Crown Token</small>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 order-lg-3 order-xl-2">
                          
                             
                               

                                <div className="card mb-g">
                                    
                                    <div className="card-body py-0 px-4 border-faded border-right-0 border-bottom-0 border-left-0">
                                        <div className="d-flex flex-column align-items-center">
                                                
                                        
                                        <div className="row">
                                            <br />
                                            <div className="col-md-4">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading">Statistics</div>
                                                    <div className="panel-body panel-player-extra">
                                                        <div align="center">Health</div>
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped bg-primary progress-bar-animated" role="progressbar" style={{width: characterPage.health / characterPage.healthmax * 200}}>
                                                                <span>{characterPage.health} / {characterPage.healthmax}</span>
                                                            </div>
                                                        </div>
                                                        <div align="center">Mana</div>
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" style={{width: characterPage.mana / characterPage.manamax * 200}}>
                                                                <span>{characterPage.mana} / {characterPage.manamax}</span>
                                                            </div>
                                                        </div>
                                                        <div align="center">Soul</div>
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-valuenow="300" aria-valuemin="0" aria-valuemax="200" style={{width: characterPage.soul / 200 * 200}}>
                                                                <span>{characterPage.soul} / 200</span>
                                                            </div>
                                                        </div>
                                                        <div align="center">Stamina</div>
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="2520" aria-valuemin="0" aria-valuemax="2520" style={{width: '0%'}}>
                                                                <span>{characterPage.stamina}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading">Equipment</div>
                                                    <div className="panel-body panel-player-extra">
                                                        <table className="table table-striped table-hover table-fixed">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center"><img src={amulet} alt="amulet"/></td>
                                                                    <td align="center"><img src={helmet} alt="helmet"/></td>
                                                                    <td align="center"><img src={backpack} alt="backpack"/></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"><img src={melee} alt="melee"/></td>
                                                                    <td align="center"><img src={armor} alt="armor"/></td>
                                                                    <td align="center"><img src={shield} alt="shield"/></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"><img src={ring} alt="ring"/></td>
                                                                    <td align="center"><img src={legs} alt="legs"/></td>
                                                                    <td align="center"><i class="far fa-times-circle"></i></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center">Soul: {characterPage.soul}</td>
                                                                    <td align="center"><img src={boots} alt="boots"/></td>
                                                                    <td align="center">Cap: {characterPage.cap}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading">Skills</div>
                                                    <div className="panel-body panel-player-extra">
                                                        <table className="table table-striped table-hover table-fixed">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="left">Magic Level</td>
                                                                    <td className="right">{characterPage.maglevel}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="left">Melee</td>
                                                                    <td className="right">{characterPage.skill_fist}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="left">Distance</td>
                                                                    <td className="right">{characterPage.skill_dist}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="left">Shielding</td>
                                                                    <td className="right">{characterPage.skill_shielding}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="left">Fishing</td>
                                                                    <td className="right">{characterPage.skill_fishing}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <table className="table table-striped table-hover table-fixed">
				
				
                <tbody><tr>
                    <td className="col-md-3">13 Aug 20 04:36 PM</td>
                    <td>Died at level <span className="notranslate">1674</span> to <a className="notranslate" href="/community/player/Huitzilopochtli">Huitzilopochtli</a> and <a className="notranslate" href="/community/player/Biskut Airlines">Biskut Airlines</a>.</td>
                    <td className="col-md-3 right">
                        
                        
                            <strong style={{color: 'green'}}>BLESS</strong>
                        
                    </td>
                </tr>
            
                <tr>
                    <td className="col-md-3">12 Aug 20 04:36 PM</td>
                    <td>Died at level <span className="notranslate">1673</span> to <span className="notranslate">The Shaper</span>.</td>
                    <td className="col-md-3 right">
                        
                        
                            <strong style={{color: 'green'}}>BLESS</strong>
                        
                    </td>
                </tr>
            
                <tr>
                    <td className="col-md-3">11 Aug 20 08:22 PM</td>
                    <td>Died at level <span className="notranslate">1665</span> to <a className="notranslate" href="/community/player/Elf">Elf</a> and <a className="notranslate" href="/community/player/Huitzilopochtli">Huitzilopochtli</a>.</td>
                    <td className="col-md-3 right">
                        
                        
                            <strong style={{color: 'green'}}>BLESS</strong>
                        
                    </td>
                </tr>
            
                <tr>
                    <td className="col-md-3">11 Aug 20 04:18 PM</td>
                    <td>Died at level <span className="notranslate">1665</span> to <span className="notranslate">the world ender</span>.</td>
                    <td className="col-md-3 right">
                        
                        
                            <strong style={{color: 'green'}}>BLESS</strong>
                        
                    </td>
                </tr>
            
                <tr>
                    <td className="col-md-3">11 Aug 20 03:07 PM</td>
                    <td>Died at level <span className="notranslate">1667</span> to <a className="notranslate" href="/community/player/Biskut Airlines">Biskut Airlines</a> and <a className="notranslate" href="/community/player/Momoa">Momoa</a>.</td>
                    <td className="col-md-3 right">
                        
                        
                            <strong style={{color: 'green'}}>BLESS</strong>
                        
                    </td>
                </tr>
            
                <tr>
                    <td className="col-md-3">05 Aug 20 09:04 PM</td>
                    <td>Died at level <span className="notranslate">1662</span> to <span className="notranslate">an infernal hound</span> and <span className="notranslate">a siegebreaker</span>.</td>
                    <td className="col-md-3 right">
                        
                        
                            <strong style={{color: 'green'}}>BLESS</strong>
                        
                    </td>
                </tr>
            

            
            
            </tbody></table>

                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                            <div className="col-lg-6 col-xl-3 order-lg-2 order-xl-3">
                            
                                <div className="card mb-g">
                                    <div className="row row-grid no-gutters">
                                        <div className="col-12">
                                            <div className="p-3">
                                                <h2 className="mb-0 fs-xl">
                                                    Quests
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3 d-flex text-primary align-items-center fs-xl">
                                                <i className="fas fa-star mr-1"></i>
                                                <i className="fas fa-star mr-1"></i>
                                                <i className="fas fa-star mr-1"></i>
                                                <i className="fas fa-star mr-1"></i>
                                                <i className="fal fa-star mr-1"></i>
                                                <span className="ml-auto">4/5 Stars</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3">
                                                <div className="fw-500 fs-xs">Demon Helmet</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-primary-300 bg-primary-gradient" role="progressbar" style={{width: '80%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3">
                                                <div className="fw-500 fs-xs">Annhilator</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-primary-300 bg-primary-gradient" role="progressbar" style={{width: '100%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3">
                                                <div className="fw-500 fs-xs">Inquisition</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-primary-300 bg-primary-gradient" role="progressbar" style={{width: '75%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3">
                                                <div className="fw-500 fs-xs">Knowledge</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-primary-300 bg-primary-gradient" role="progressbar" style={{width: '95%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3">
                                                <div className="fw-500 fs-xs">PostMan</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-danger-300 bg-warning-gradient" role="progressbar" style={{width: '30%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3 text-center">
                                                <Link to='/'>View all</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
    return {
      players: state.player.player
    }

  }

  
  export default connect(mapStateToProps, { playerGetCharacter })(Character)